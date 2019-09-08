import pymongo
from Config.confManager import Config
from Logs.LogManager import LogManager


class MongoClient:
    db = None

    def __init__(self):
        self.config = Config()
        self.enableDebug = self.config.getConfig('system', 'debug')
        try:
            print('Connecting to MongoDB Altas....')
            client = pymongo.MongoClient(self.config.getConfig('app', 'dbMongo'))
            db = client.test
            if self.enableDebug:
                self.logManager.log('[DB Connection] Connecting to MongoDB Altas....')
            print('MongoDB Atlas Connected.')
        except Exception as e:
            if self.enableDebug:
                self.logManager.log(str(e))
            print('[DB Connection - Exception] ', e)
            quit()
