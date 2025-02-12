const express = require('express')
const router = express.Router()

//Add yvar our routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/route-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichRoute = req.session.data['how-can-i-help']

  // Check whether the variable matches a condition
  if (whichRoute == "Print-Forecast"){
    // Send user to next page
    res.redirect('CIS/assistance')
  } else {
    // Send user to ineligible page
    res.redirect('CIS/enquiry')
  }

})

router.post('/standard/route-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichRoute = req.session.data['how-can-i-help']

  // Check whether the variable matches a condition
  if (whichRoute == "Print-Forecast"){
    // Send user to next page
    res.redirect('/standard_journey/assistance')
  } else {
    // Send user to ineligible page
    res.redirect('/standard_journey/enquiry')
  }

})

router.post('/confirm_answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var correctCustomer = req.session.data['confirm-customer']

  // Check whether the variable matches a condition
  if (correctCustomer == "no"){
    // Send user to next page
    res.redirect('CIS/nino')
  } else {
    // Send user to ineligible page
    res.redirect('/CIS/route')
  }

})

router.post('/format-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichFormat = req.session.data['which-format']

  // Check whether the variable matches a condition
  if (whichFormat == "print"){
    // Send user to next page
    res.redirect('/colouredpaper')
  } else if (whichFormat == "Braille")
    // Send user to ineligible page
    res.redirect('/braille')
  else {
    res.redirect('/BSL')
  }

})

router.post('/altformatyes-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var altformatyes = req.session.data['altformat-yes']

  // Check whether the variable matches a condition
  if (altformatyes == "Audio format (cassette, CD, DVD or MP3)"){
    // Send user to next page
    res.redirect('Altformats_current/audioformat1')
  }
  if (altformatyes == "Braille"){
    // Send user to next page
    res.redirect('Altformats_current/braille1')
  }
  if (altformatyes == "Large print (standard 16 font)"){
    // Send user to next page
    res.redirect('Altformats_current/largeprint1')
  }
  if (altformatyes == "Other adjustments requested"){
    // Send user to next page
    res.redirect('Altformats_current/differentformat1')
  }
})

router.post('/NameNINO-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var nameNINO = req.session.data['Name-NINO']

  // Check whether the variable matches a condition
  if (nameNINO == "Yes"){
    // Send user to next page
    res.redirect('/Modelling_errors_testing/index2')
  }
  if (nameNINO == "No"){
    // Send user to next page
    res.redirect('/Modelling_errors_testing/NINOstart')
  }
})

router.post('/howcanhelp1-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howcanhelp1 = req.session.data['how_can_help1']

  // Check whether the variable matches a condition
  if (howcanhelp1 == "State Pension forecast"){
    // Send user to next page
    res.redirect('/CIS_journey/access2')
  }
  if (howcanhelp1 == "Forecast enquiry"){
    // Send user to next page
    res.redirect('/CIS_journey/forecast1')
  }
})

router.post('/ownforecast-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ownforecast = req.session.data['own-forecast']

  // Check whether the variable matches a condition
  if (ownforecast == "Yes"){
    // Send user to next page
    res.redirect('/CIS_journey/postcode')
  }
  if (ownforecast == "No"){
    // Send user to next page
    res.redirect('/CIS_journey/NINOstart')
  }
})

router.post('/Welsh-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var welshformat = req.session.data['welsh-format']

  // Check whether the variable matches a condition
  if (welshformat == "Yes"){
    // Send user to next page
    res.redirect('/CIS_journey/preview')
  }
  if (welshformat == "No"){
    // Send user to next page
    res.redirect('/CIS_journey/preview')
  }

})

router.post('/altformat-answer', (req, res) => {
  var accessibilityNeeds = req.session.data['accessibilityNeeds']

  if (accessibilityNeeds === 'yes') {
    var alternativeFormat = req.session.data['alternativeFormat']

    if (alternativeFormat === 'audio-format') {
      res.redirect('/Altformats_current/audioformat1')
    } else if (alternativeFormat === 'braille') {
      res.redirect('/Altformats_current/braille1')
    } else if (alternativeFormat === 'large-print') {
      res.redirect('/Altformats_current/largeprint1')
    } else if (alternativeFormat === 'other-adjustments-requested') {
      res.redirect('/Altformats_current/differentformat1')
    }
  } else {
    res.redirect('/5')
  }
})

router.post('/altformat-answer1', (req, res) => {
  var accessibilityNeeds = req.session.data['accessibilityNeeds1']

  if (accessibilityNeeds === 'yes') {
    var alternativeFormat = req.session.data['alternativeFormat11']

    if (alternativeFormat === 'audio-format') {
      res.redirect('/standard_journey/audioformat1')
    } else if (alternativeFormat === 'braille') {
      res.redirect('/standard_journey/braille1')
    } else if (alternativeFormat === 'large-print') {
      res.redirect('/standard_journey/largeprint1')
    } else if (alternativeFormat === 'other-adjustments-requested') {
      res.redirect('/Altformats_current/differentformat1')
    }
  } else {
    res.redirect('/standard_journey/hasPOA')
  }
})

router.post('/alternativeformat-answer', (req, res) => {
  var accessibilityNeeds2 = req.session.data['accessibilityNeeds2']

  if (accessibilityNeeds2 === 'yes') {
    var alternativeFormat5 = req.session.data['alternativeFormat5']

    if (alternativeFormat5 === 'audio-format') {
      res.redirect('/CIS_journey/audioformat2')
    } else if (alternativeFormat5 === 'braille') {
      res.redirect('/CIS_journey/braille2')
    } else if (alternativeFormat5 === 'large-print') {
      res.redirect('/CIS_journey/largeprint2')
    } else if (alternativeFormat5 === 'other-adjustments-requested') {
      res.redirect('/CIS_journey/differentformat2')
    }
  } else {
    res.redirect('/CIS_journey/own_forecast')
  }
})

router.post('/current_address', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var correctAddress = req.session.data['address-correct']

  // Check whether the variable matches a condition
  if (correctAddress == "correct-address"){
    // Send user to next page
    res.redirect('CIS/confirm_details')
  } else {
    // Send user to ineligible page
    res.redirect('/CIS/addressUpdate')
  }

})

router.post('/RoleC/customerType', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/name')
  } else {
    res.redirect('/RoleC/name2')
  }
})

router.post('/RoleC/NIroute', function (req, res) {
  const number = req.session.data['number']

  if (number == 'QQ 12 34 56 C' | number == 'QQ123456C') {
    res.redirect('/RoleC/routeMB')
  } else if (number == 'QQ 23 45 65 D' | number == 'QQ234565D'){
    res.redirect('/RoleC/routeNV')
  }
  else if (number == 'QQ 34 56 78 E' | number == 'QQ345678E'){
    res.redirect('/RoleC/routeRRE')
  }
  else if (number == 'QQ 45 67 89 F' | number == 'QQ456789F') {
    res.redirect('/RoleC/routeSR')
  }
  else if (number == 'QQ 91 82 73 G' | number == 'QQ918273G') {
    res.redirect('/RoleC/routeSR2')
  }
  else if (number == 'QQ 64 55 19 H' | number == 'QQ645519H') {
    res.redirect('/RoleC/routeSR3')
  }
  else {
    res.redirect('/RoleC/routeSR')
  }
})

router.post('/RoleC/MBquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashMB')
  }
})

router.post('/RoleC/NVquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/index')
  }
})

router.post('/RoleC/RREquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashRRE')
  }
})

router.post('/RoleC/SRquestion', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashSR')
  }
})

router.post('/RoleC/SR2question', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashSR2')
  }
})

router.post('/RoleC/SR3question', function (req, res) {
  const type = req.session.data['type']

  if (type === 'main') {
    res.redirect('/RoleC/access')
  } else {
    res.redirect('/RoleC/dashSR3')
  }
})

router.post('/RoleC/format', function (req, res) {
  const access = req.session.data['access']

  if (access === 'yes') {
    res.redirect('/RoleC/accessroute')
  } else {
    res.redirect('/RoleC/customer')
  }
})

router.post('/NameNINO-answerAF', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var nameNINOAF = req.session.data['Name-NINOAF']

  // Check whether the variable matches a condition
  if (nameNINOAF == "Yes"){
    // Send user to next page
    res.redirect('/Alternative-formats/how_can_helpAF')
  }
  if (nameNINOAF == "No"){
    // Send user to next page
    res.redirect('/Alternative-formats/NINOstartAF')
  }
})

router.post('/has_POA', function (req, res) {
  const access = req.session.data['recipient']

  if (access === 'yes') {
    res.redirect('/standard_journey/name')
  } else {
    res.redirect('/standard_journey/3rdpartyRecorded')
  }
})

router.post('/POA_held', function (req, res) {
  const access = req.session.data['inSearchlight']

  if (access === 'yes') {
    res.redirect('/standard_journey/3rdpartyDetails')
  } else {
    res.redirect('/standard_journey/3rdpartyLetter')
  }
})


router.post('/altformat-answer1', (req, res) => {
  var accessibilityNeeds = req.session.data['accessibilityNeeds1']

  if (accessibilityNeeds === 'yes') {
    var alternativeFormat = req.session.data['alternativeFormat']

    if (alternativeFormat === 'audio-format') {
      res.redirect('/standard_journey/audioformat')
    } else if (alternativeFormat === 'braille') {
      res.redirect('/standard_journey/braille1')
    } else if (alternativeFormat === 'large-print') {
      res.redirect('/standard_journey_current/largeprint1')
    } else if (alternativeFormat === 'other-adjustments-requested') {
      res.redirect('/standard_journey_current/differentformat1')
    }
  } else {
    res.redirect('/5')
  }
})

router.post('/howcanhelpAF-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howcanhelpAF = req.session.data['how_can_helpAF']

  // Check whether the variable matches a condition
  if (howcanhelpAF == "State Pension forecast"){
    // Send user to next page
    res.redirect('/Alternative-formats/altformat')
  }
  if (howcanhelpAF == "Forecast enquiry"){
    // Send user to next page
    res.redirect('/Alternative-formats/forecastAF')
  }
})

router.post('/altformatjourney-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var altformatjourney = req.session.data['altformat-journey']

  // Check whether the variable matches a condition
  if (altformatjourney == "Large print"){
    // Send user to next page
    res.redirect('Alternative-formats/largeprint')
  }
  if (altformatjourney == "Coloured paper"){
    // Send user to next page
    res.redirect('Alternative-formats/colouredpaper')
  }
  if (altformatjourney == "Large print and coloured paper"){
    // Send user to next page
    res.redirect('Alternative-formats/largeprintcoloured')
  }
  if (altformatjourney == "Audio format (cassette, CD, DVD or MP3)"){
    // Send user to next page
    res.redirect('Alternative-formats/audioformat')
  }
  if (altformatjourney == "Braille"){
    // Send user to next page
    res.redirect('Alternative-formats/braille')
  }
  if (altformatjourney == "British Sign Language (Mpeg or DVD)"){
    // Send user to next page
    res.redirect('Alternative-formats/BSL')
  }
  if (altformatjourney == "Something else"){
    // Send user to next page
    res.redirect('Alternative-formats/somethingelse')
  }
  })

  router.post('/whichformat-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whichformat = req.session.data['which-format']

  // Check whether the variable matches a condition
  if (whichformat == "Yes"){
    // Send user to next page
    res.redirect('/Alternative-formats/altformatyes')
  }
  if (whichformat == "No"){
    // Send user to next page
    res.redirect('/Alternative-formats/own_forecastAF')
  }
})

router.post('/ownforecastAF-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ownforecastAF = req.session.data['own-forecastAF']

  // Check whether the variable matches a condition
  if (ownforecastAF == "Yes"){
    // Send user to next page
    res.redirect('/Alternative-formats/addresstypeCIS')
  }
  if (ownforecastAF == "No"){
    // Send user to next page
    res.redirect('/Alternative-formats/NINOstartAF')
  }
})

router.post('/addresstypeCIS-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addresstypeCISAF = req.session.data['addresstype-CISAF']

  // Check whether the variable matches a condition
  if (addresstypeCISAF == "Home address"){
    // Send user to next page
    res.redirect('/Alternative-formats/CISaddress')
  }
  if (addresstypeCISAF == "Correspondence address"){
    // Send user to next page
    res.redirect('/Alternative-formats/postcodecorresAF')
  }
  if (addresstypeCISAF == "Home and correspondence address"){
    // Send user to next page
    res.redirect('/Alternative-formats/CISaddresshomeandcorres')
  }
})

router.post('/addressfound-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressfoundAF = req.session.data['address-foundAF']

  // Check whether the variable matches a condition
  if (addressfoundAF == "Yes"){
    // Send user to next page
    res.redirect('/Alternative-formats/WelshAF')
  }
  if (addressfoundAF == "No"){
    // Send user to next page
    res.redirect('/Alternative-formats/postcodeAF')
  }
})

router.post('/WelshAF-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var welshformatAF = req.session.data['welsh-formatAF']

  // Check whether the variable matches a condition
  if (welshformatAF == "Yes"){
    // Send user to next page
    res.redirect('/Alternative-formats/previewAF')
  }
  if (welshformatAF == "No"){
    // Send user to next page
    res.redirect('/Alternative-formats/previewenglishAF')
  }
})

router.post('/addressfoundcorres-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressfoundcorresAF = req.session.data['address-foundcorresAF']

  // Check whether the variable matches a condition
  if (addressfoundcorresAF == "Yes"){
    // Send user to next page
    res.redirect('/Alternative-formats/WelshcorresAF')
  }
  if (addressfoundcorresAF == "No"){
    // Send user to next page
    res.redirect('/Alternative-formats/postcodeAF')
  }
})

router.post('/WelshcorresAF-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var welshformatcorresAF = req.session.data['welsh-formatcorresAF']

    // Check whether the variable matches a condition
    if (welshformatcorresAF == "Yes"){
      // Send user to next page
      res.redirect('/Alternative-formats/previewcorresAF')
    }
    if (welshformatcorresAF == "No"){
      // Send user to next page
      res.redirect('/Alternative-formats/previewenglishcorresAF')
    }
  })

  router.post('/addressfoundhomecorres-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var addressfoundhomecorresAF = req.session.data['address-foundhomecorresAF']

    // Check whether the variable matches a condition
    if (addressfoundhomecorresAF == "Yes"){
      // Send user to next page
      res.redirect('/Alternative-formats/postcodehomeandcorresAF')
    }
    if (addressfoundhomecorresAF == "No"){
      // Send user to next page
      res.redirect('/Alternative-formats/postcodehomeAF')
    }
  })

  router.post('/WelshhomecorresAF-answer', function (req, res) {

      // Make a variable and give it the value from 'how-many-balls'
      var welshformathomecorresAF = req.session.data['welsh-formathomecorresAF']

      // Check whether the variable matches a condition
      if (welshformathomecorresAF == "Yes"){
        // Send user to next page
        res.redirect('/Alternative-formats/previewhomecorresAF')
      }
      if (welshformathomecorresAF == "No"){
        // Send user to next page
        res.redirect('/Alternative-formats/previewenglishhomeandcorresAF')
      }
    })



module.exports = router
