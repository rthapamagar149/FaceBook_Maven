Feature: Register
Scenario: Sucessful Login with valid credentials
     Given user Launch Chrome Browser
     When user opens urlh "https://www.facebook.com/"
     And user firstName  as "rabin"
     And user lastName as "magar"
     And user email as "4695948688"
     And user password as "rabin12345"
     And user birthMonth as "Feb"
     And click on login
     And close browser