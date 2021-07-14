import { MenuItems } from '../interfaces/appInterfaces';


export const menuItems: MenuItems[] = [
    {
        name: 'Animacion 101',
        icon: 'cube-outline',
        component: 'Animation101Screen', 
    }, 
 
    {
     name: 'Animacion 102',
     icon: 'albums-outline',
     component: 'Animation102Screen', 
    },
    {
     name: 'Switches',
     icon: 'toggle-outline',
     component: 'SwitchScreen', 
    },
    {
     name: 'Alerts',
     icon: 'alert-circle-outline',
     component: 'AlertScreen', 
    },
    {
     name: 'TextInput',
     icon: 'document-text-outline',
     component: 'TextInpuntScreen', 
    },
    {
     name: 'Pull to Refresh',
     icon: 'refresh-circle-outline',
     component: 'PullToRefreshScreen', 
    },
    {
     name: 'Section List',
     icon: 'list-outline',
     component: 'customSectionListScreen', 
    },
    {
     name: 'Modal Screen',
     icon: 'copy-outline',
     component: 'ModalScreen', 
    },
    {
     name: 'Infinite Scroll',
     icon: 'download-outline',
     component: 'InfiniteScrollScreen', 
    },
    {
     name: ' Slides',
     icon: 'flower-outline',
     component: 'SlidesScreen', 
    },
    {
     name: ' Themes',
     icon: 'flask-outline',
     component: 'ChangeThemeScreen', 
    },
 ]