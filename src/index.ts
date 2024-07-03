import appLogger, { LogLevels } from './logger';

const init = ()=> {
    appLogger.log(LogLevels.INFO, "User successsfully created with ID:89, email:walex@jupa.com")
    appLogger.log(LogLevels.WARNING, "A simple warning for you")
    appLogger.log(LogLevels.ERROR, "endpoint /sea returned with 500")
};


init();   