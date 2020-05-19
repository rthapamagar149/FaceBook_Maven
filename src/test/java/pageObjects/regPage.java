package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class regPage {
	 public WebDriver ldriver;
	  public regPage(WebDriver rdriver) {
		  ldriver= rdriver;
		  PageFactory.initElements(rdriver, this);
	  }
	  @FindBy(id="u_0_m")
	  @CacheLookup
	  WebElement txtfirstName;
	  @FindBy(id="u_0_o")
	  @CacheLookup
	  WebElement txtsecondtName;
	  @FindBy(id="u_0_r")
	  @CacheLookup
	  WebElement txtemail;
	  @FindBy(xpath="//input[@id='u_0_w']")
	  @CacheLookup
	  WebElement txtpassword;
	  @FindBy(xpath="//select[@id='month']")
	  @CacheLookup
	  WebElement txtbirthmonth;
	  @FindBy(xpath="//button[@id='loginbutton']")
	  @CacheLookup
	  WebElement btnlogin;
	  @FindBy(xpath="//input[@id='u_0_b']")
	  @CacheLookup
	  WebElement btnlogout;
	  public void setfirstName(String firstName ) {
		  txtfirstName.clear();
		  txtfirstName.sendKeys(firstName);
	  }
	  public void setlastName(String lastName ) {
		  txtsecondtName.clear();
		  txtsecondtName.sendKeys(lastName);
	  }
	  public void setemail(String email ) {
		  txtemail.clear();
		  txtemail.sendKeys(email);
	  }
	  public void setpassword(String password ) {
		  txtpassword.clear();
		  txtpassword.sendKeys(password);
	  }
	  public void setbirthMonth(String birthMonth ) {
		  txtbirthmonth.clear();
		  Select dropmonth=new Select(txtbirthmonth);
		  dropmonth.selectByVisibleText(birthMonth);
		 // txtbirthmonth.sendKeys(birthMonth);
	  }
	  public void clicklogin() {
		  btnlogin.click();  
	  }
	  public void clicklogout() {
		  btnlogout.click();  
	  }
	  
	  
}
