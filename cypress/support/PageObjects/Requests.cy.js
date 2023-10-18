import API from "../../fixtures/values.json"
var createMobilePhoneNumber = require("random-mobile-numbers");
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
    // constructors
    
    let firstName = random.first();
    let lastName = random.last();
    let emailAdd = firstName + "." + lastName + "@mailinator.com";
    let mobNumber = createMobilePhoneNumber("EG");
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
