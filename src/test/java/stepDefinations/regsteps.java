package stepDefinations;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.PendingException;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import pageObjects.regPage;

public class regsteps {
	public WebDriver driver;
	public regPage lp;
	@Given("^user Launch Chrome Browser$")
    public void user_launch_chrome_browser(){
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		 driver=new ChromeDriver();
	       lp=new regPage(driver);
    }

    @When("^user opens urlh \"([^\"]*)\"$")
    public void user_opens_urlh_something(String url) {
        driver.get(url);
    }

    @And("^user firstName  as \"([^\"]*)\"$")
    public void user_firstname_as_something(String firstName){
       lp.setfirstName(firstName);
    }

    @And("^user lastName as \"([^\"]*)\"$")
    public void user_lastname_as_something(String lastName){
        lp.setlastName(lastName);
    }

    @And("^user email as \"([^\"]*)\"$")
    public void user_email_as_something(String email){
       lp.setemail(email);
    }

    @And("^user password as \"([^\"]*)\"$")
    public void user_password_as_something(String password){
        lp.setpassword(password);
    }
    @And("^user birthMonth as \"([^\"]*)\"$")
    public void user_birthMonth_as(String birthMonth){
        lp.setbirthMonth(birthMonth);
    	
    }

    @And("^click on login$")
    public void click_on_login() throws Throwable {
        throw new PendingException();
    }

    @And("^close browser$")
    public void close_browser() throws Throwable {
        throw new PendingException();
    }


}
