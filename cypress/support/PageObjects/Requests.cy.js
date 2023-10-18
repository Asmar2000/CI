import API from "../../fixtures/values.json"
var random = require("random-name");
var randomString = require("randomized-string");
let globalToken;
class request {
  getToken() {
    
    cy.request({
      method: "POST",
      url: API.getToken,
      body: {
        isGuest: true,
        phoneNumber: "01019033400",
        password: "123456",
      },
    }).then((response) => {
       expect(response.body.statusMessage).to.equal("تم تسجيل الدخول بنجاح");
      cy.wrap(response.body.data.token);
      globalToken = response.body.data.token; // Assign token value
    });
  }

  createUser() {

    function generateRandomEgyptianPhoneNumber() {
      const prefixes = ["010", "011", "012", "015"];
      const randomNumber = Math.floor(Math.random() * 100000000);
    
      // Generate a random prefix and add it to the random number
      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const phoneNumber = randomPrefix + randomNumber.toString().padStart(8, "0");
    
      return phoneNumber;
    }
    const randomPhoneNumber = generateRandomEgyptianPhoneNumber();
    cy.log(randomPhoneNumber)
    // constructors
    
    let firstName = random.first();
    let lastName = random.last();
    let emailAdd = firstName + "." + lastName + "@mailinator.com";
    let mobNumber = randomPhoneNumber
    let PasswordValue = "123456";
    let randomValue = "1";
    let birthYear = "1991";
    var firebaseToken = randomString.generate({
      range: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_0123456789",
      length: 183,
    });

    cy.request({
      method: "POST",
      url: API.createUser,
      body: {
        email: emailAdd,
        password: PasswordValue,
        firstName: firstName,
        lastName: lastName,
        dateOfBirthDay: randomValue,
        dateOfBirthMonth: randomValue,
        dateOfBirthYear: birthYear,
        phone: mobNumber,
        otp: "123456",
        firebaseRegistrationToken: firebaseToken,
      },
      headers: {
        Authorization: globalToken //add token here,
      },
      
    }).then((response) => {
      response.body.responseMessage = "Response received successfully";
      
    });
  }
}

export default request;
