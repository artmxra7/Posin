import dashboardsNavigationConfig from './dashboards.navigation.config'
import uiComponentNavigationConfig from './ui-components.navigation.config'
import conceptsNavigationConfig from './concepts.navigation.config'
import peopleNavigationConfig from './people.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import othersNavigationConfig from './others.navigation.config'
import guideNavigationConfig from './guide.navigation.config'
import databaseNavigationConfig from './database.navigation.config'

const navigationConfig = [
    ...dashboardsNavigationConfig,
    ...databaseNavigationConfig,
    ...conceptsNavigationConfig,
    // ...peopleNavigationConfig,
    ...uiComponentNavigationConfig,
    ...authNavigationConfig,
    ...othersNavigationConfig,
    ...guideNavigationConfig,
]

export default navigationConfig
