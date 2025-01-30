import User from '../models/userSchema.js'
import Booking from '../models/bookingSchema.js'
import labTestBooking from '../models/labTestBooking.cjs'
import Doctor from '../models/doctorSchema.js'



// update user
export const updateUser = async (req, res) => {
  const id = req.params.id

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updateUser,
    })
  } catch (error) {
    console.error('Error in updating user:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id

  try {
    const updateUser = await User.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (error) {
    console.error('Error in deleting user:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

// get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id

  try {
    const user = await User.findById(id).select('-password')
    res.status(200).json({
      success: true,
      message: 'User Found !',
      data: user,
    })
  } catch (error) {
    console.error('No User Found !!:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

// get all user
export const getAllUser = async (req, res) => {
  const id = req.params.id

  try {
    const users = await User.find({}).select('-password')
    res.status(200).json({
      success: true,
      message: 'Users Found !',
      data: users,
    })
  } catch (error) {
    console.error('Not Found !!:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

// get user profile
export const getUserProfile = async (req, res) => {
  const userId = req.userId
  // console.log(userId);

  try {
    const user = await User.findById(userId)
    if (!user) {
      console.log(userId)
      return res.status(404).json({
        success: false,
        message: 'User not found',
      })
    }
    const { password, ...rest } = user._doc
    res.status(200).json({
      success: true,
      message: 'User Found !',
      data: { ...rest },
    })
  } catch (error) {
    console.error('No User Found !!:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

// get myAppointments
export const getMyAppointments = async (req, res) => {
  // const userId = req.userId;

  try {
    // step1: retrieve appointments from bookings for specific user
    const bookings = await Booking.find({ user: req.userId })

    // step2: extract doctorId from appointments booking
    const doctorIds = bookings.map((booking) => booking.doctor.id)

    // step3: retrieve doctor from doctorId
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      '-password'
    )

    return res.status(200).json({
      success: true,
      message: 'Appointments Found !',
      data: doctors,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}
