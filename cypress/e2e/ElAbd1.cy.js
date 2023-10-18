import request from "../support/PageObjects/Requests.cy";
const call = new request();
describe("Creating users", () => {
  beforeEach(() => {
    call.getToken();
  });

  for (let i = 0; i < 10; i++) {
    it(`[Test ${i + 1}] calling create users API`, () => {
      call.createUser();
    });
  }
});