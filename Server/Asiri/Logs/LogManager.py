import logging 
import logging.config 
from Config.confManager import Config


class LogManager:
    def __init__(self):
        self.config = Config()
        self.enableDebug = self.config.getConfig('system', 'debug')

    # log messages
    def log(self,message):
        try:
            if self.enableDebug:
                # Create and configure logger
                logging.basicConfig(filename=self.config.getConfig('system','logger'),
                                    level=logging.WARNING,
                                    format='%(levelname)s:%(asctime)s:%(message)s')
                  
                # Creating an object
                logger=logging.getLogger() 
                  
                # Setting the threshold of logger to DEBUG
                logger.setLevel(logging.DEBUG)
                
                # Log messages
                logger.debug(message)
    
        except Exception as e:
            print(e)