import configparser


class Config:
    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read("config.ini")

    # get all sections
    def getAllSections(self):
        return self.config.sections()

    # get all config values in a section
    def getAllOptions(self, section):
        return self.config.options(section)

    # get config value by section and option
    def getConfig(self, section,status):
        return self.config.get(section,status)