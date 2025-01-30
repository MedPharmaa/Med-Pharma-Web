import { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Box,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import styles from "./pdrawer.module.css";
import { FcHome } from "react-icons/fc";

const PincodeDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [pin, setPin] = useState("");
  const [text, setText] = useState("Find Hospitals");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLocation = async (pincode) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?postalcode=${pincode}&format=json`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat, lon };
      } else {
        throw new Error("Invalid PIN code or no location found.");
      }
    } catch (error) {
      throw new Error("Unable to fetch location. Please try again.");
    }
  };

  const fetchHospitals = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="hospital"](around:5000,${lat},${lon});out;`
      );
      return response.data.elements.map((hospital) => hospital.tags.name || "Unknown Hospital");
    } catch (error) {
      throw new Error("Unable to fetch hospitals. Please try again.");
    }
  };

  const searchCity = async () => {
    setLoading(true);
    setError("");
    setHospitals([]);
    try {
      const { lat, lon } = await fetchLocation(pin); // Get latitude and longitude for the PIN
      const fetchedHospitals = await fetchHospitals(lat, lon); // Fetch hospitals near the location
      setHospitals(fetchedHospitals);
      setText(`Hospitals in ${pin}`);
    } catch (err) {
      setError(err.message || "Unable to fetch hospitals. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {text === "Find Hospitals" ? (
        <Button
          ref={btnRef}
          color="gray.700"
          onClick={onOpen}
          variant="ghost"
          bg="white"
          fontWeight={600}
          height="40px"
          borderTopEndRadius="none"
          borderBottomEndRadius="none"
          _hover="none"
        >
          {text}
        </Button>
      ) : (
        <Button
          ref={btnRef}
          color="#30363c"
          onClick={onOpen}
          variant="ghost"
          bg="white"
          height="40px"
          fontSize={"14px"}
          noOfLines={2}
          borderTopEndRadius="none"
          borderBottomEndRadius="none"
          _hover="none"
          textAlign="left"
          fontWeight={"500"}
        >
          <span
            style={{ fontSize: "12px", color: "#4F585E", fontWeight: "400" }}
          >
            Delivery to
          </span>
          <br />
          {text}
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            marginRight="436px"
            style={{
              backgroundColor: "white",
              padding: "30px",
              border: "none",
              color: "#767676",
              marginTop: "20px",
              borderRadius: "0px",
            }}
          />
          <DrawerHeader className={styles.heading}>
            Choose your <br /> Location
          </DrawerHeader>

          <DrawerBody>
            <InputGroup>
              <Input
                height="50px"
                borderColor="#767676"
                placeholder="Enter PIN Code"
                borderRadius="8px"
                _hover="none"
                onChange={(e) => setPin(e.target.value)}
              />
              <InputRightElement height="50px" width="140px">
                <Button
                  bg="#37857e"
                  size="md"
                  height="50px"
                  width="140px"
                  borderLeftRadius="none"
                  color="white"
                  fontSize="14px"
                  fontWeight="800"
                  onClick={searchCity}
                  _hover="none"
                  isLoading={loading}
                >
                  Check
                </Button>
              </InputRightElement>
            </InputGroup>
            {error && <Box color="red" mt="2">{error}</Box>}
            <Stack gap="20px" style={{ marginTop: "20px" }}>
              {loading ? (
                <Spinner />
              ) : hospitals.length > 0 ? (
                hospitals.map((name, i) => (
                  <Box
                    key={i}
                    border="1px solid"
                    borderColor="#f5f5f5"
                    borderRadius="10px"
                    padding="20px"
                    bg="white"
                  >
                    <Stack direction="horizontal" gap="20px" alignItems="center">
                      <FcHome style={{ width: "40px", height: "40px" }} />
                      <Box fontWeight="500" fontSize="14px">
                        {name}
                      </Box>
                    </Stack>
                  </Box>
                ))
              ) : (
                !loading && <Box>No hospitals found for this PIN code.</Box>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default PincodeDrawer;