# from appium import webdriver

# desired_caps = {
#   'platformName': 'Android',
#   'deviceName': 'URT7N19411000642',
#   'platformVersion': '9',
#   'appPackage': 'com.tencent.mm',
#   'appActivity': 'com.tencent.mm.ui.LauncherUI',
#   'automationName': 'UiAutomator2'
#  }
# driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)



import time

from appium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class Wechat_Moment():
    def __init__(self):
        desired_caps = {}
        desired_caps['platformName'] = 'Android'
        desired_caps['platformVersion'] = '10'
        desired_caps['deviceName'] = 'URT7N19411000642'
        desired_caps['appPackage'] = 'com.tencent.mm'
        desired_caps['appActivity'] = 'com.tencent.mm.ui.LauncherUI'
        desired_caps['autoGrantPermissions'] = True
        desired_caps['webkitResponseTimeout'] = '30'

        # the slide position in moment
        self.start_x = 300
        self.start_y = 800
        self.end_x = 300
        self.end_y = 300

        # open wechat
        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
        # wait openning 
        self.wait = WebDriverWait(self.driver, 30)


        # self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
        # # Wait for the app to start
        # time.sleep(10)
        print('openning...')
       

    def login(self):
        # time.sleep(10)
        # login button
        elem = self.driver.find_element_by_xpath("//android.widget.Button[@text='Log In']")
        elem.click()     
        # login_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/e4g")))
        # login_btn.click()

        self.driver.quit()
        # # select other login options
        # change_login_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/d16")))
        # change_login_btn.click()
        # # login via WeChat
        # change_login_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/dd")))
        # change_login_btn.click()
        # # input account
        # account = self.wait.until(EC.presence_of_element_located((By.XPATH, '//*[@resource-id="com.tencent.mm:id/cos"]/android.widget.EditText'))) 
        # account.send_keys("wxzcon")
        # # input password
        # password = self.wait.until(EC.presence_of_element_located((By.XPATH,  '//*[@resource-id="com.tencent.mm:id/m7"]/android.widget.EditText')))
        # password.send_keys("dongjie1122")
        # # login
        # login = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/cov")))
        # login.click()
        # # remove connection alter
        # no_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/az9")))
        # no_btn.click()
        print('success...')


    # def find_xiaoshuaib(self):
    #     # click search 
    #     search_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/iq")))
    #     # wait then click
    #     time.sleep(10)
    #     search_btn.click()
    #     # input
    #     search_input = self.wait.until(EC.presence_of_element_located((By.ID, "com.tencent.mm:id/kh")))
    #     search_input.send_keys("wistbean")
    #     print('searching...')
    #     # click head shot
    #     xiaoshuaib_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/py")))
    #     xiaoshuaib_btn.click()
    #     # clik top right 
    #     menu_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/jy")))
    #     menu_btn.click()
    #     # click head shot
    #     icon_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/e0c")))
    #     icon_btn.click()
    #     # click moment
    #     moment_btn = self.wait.until(EC.element_to_be_clickable((By.ID, "com.tencent.mm:id/d86")))
    #     moment_btn.click()
    #     print('inside moment...')

    # def get_data(self):
    #     while True:
    #         # get ListView
    #         items = self.wait.until(EC.presence_of_all_elements_located((By.ID, 'com.tencent.mm:id/eew')))
    #         # slide
    #         self.driver.swipe(self.start_x, self.start_y, self.end_x, self.end_y, 2000)
    #         #get everything
    #         for item in items:
    #             moment_text = item.find_element_by_id('com.tencent.mm:id/kt').text
    #             day_text = item.find_element_by_id('com.tencent.mm:id/eke').text
    #             month_text = item.find_element_by_id('com.tencent.mm:id/ekf').text
    #             print('data: %s' % moment_text)
    #             print('time %smonth%s' % (month_text, day_text))

if __name__ == '__main__':
    wc_moment = Wechat_Moment()
    wc_moment.login()
    # wc_moment.find_xiaoshuaib()
    # wc_moment.get_data()