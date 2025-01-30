const LabTestBooking = require('../models/labTestBooking.cjs')

const stripe = require("stripe")(
    "sk_test_51O4hY9SAFIUZ4HpWObRqBcH8pMoyVPbcCLpOzNuMKw5Rw4Yv4GZqh8ylqqHrUEkKWPheK1UK04B7A4I3uL6kGorK00soCEj7xH"
  );

const bookLabTest = async (req, res) => {
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'Medofin',
          },
          unit_amount: 9900,
        },
        quantity: 1,
      },
    ],
    success_url: 'https://medofin.com/',
    cancel_url: 'https://medofin.com/error',
  })

  const { username, testName , userEmail } = req.body
  try { 
    
    function getCurrentDateTime() {
      const now = new Date()
      const year = now.getFullYear()
      const month = ('0' + (now.getMonth() + 1)).slice(-2)
      const day = ('0' + now.getDate()).slice(-2)
      const hours = ('0' + now.getHours()).slice(-2)
      const minutes = ('0' + now.getMinutes()).slice(-2)
      const seconds = ('0' + now.getSeconds()).slice(-2)

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }

    const currentDateTime = getCurrentDateTime()
    const labBooking = new LabTestBooking({
      user: username,
      userEmail: userEmail,
      labTestName: testName,
      timestamp: currentDateTime,
    })
    await labBooking.save()
    res.status(200).json({
      success: true,
      message: 'Lab Test Booked Successfully',
      url: session.url,
    })
  } catch (error) {
    console.error('Error in booking lab test:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

const adminLab = async (req, res) => {
  try {
    const data = await LabTestBooking.find({})
    res.status(200).json({
      success: true,
      message: 'Lab Test Found!',
      data: data,
    })
  } catch (error) {
    console.error('Error in getting lab test:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}

module.exports = { adminLab, bookLabTest }
