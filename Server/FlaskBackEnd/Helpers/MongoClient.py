import pymongo
from Config.confManager import Config
from Logs.LogManager import LogManager


class MongoClient:
    db = None
    logManager = None
    config = None
    enableDebug = False

    def __init__(self):
        self.config = Config()
        self.logManager = LogManager()
        self.enableDebug = self.config.getConfig('system', 'debug')
        try:
            print('Connecting to MongoDB Altas....')
            client = pymongo.MongoClient(self.config.getConfig('app', 'dbMongo'))
            self.db = client.test
            if self.enableDebug:
                self.logManager.log('[DB Connection] Connecting to MongoDB Altas....')
            print('MongoDB Atlas Connected.')

        except Exception as e:
            if self.enableDebug:
                self.logManager.log(str(e))
            print('[DB Connection - Exception] ', e)
            quit()

    def connect(self):
        return self.db
