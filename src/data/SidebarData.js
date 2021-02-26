import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';
export const sidebarItems =[
    {
        icons: <MessageIcon/>,
        text: "Thread"
    },
    {
        icons: <InboxIcon/>,
        text: "All DMs"
    },
    {
        icons:<DraftsIcon/>,
        text: "Mentions & Reactions"
    },
    {
        icons:<BookmarkBorderIcon/>,
        text: "Save Items"
    },
    {
        icons:<GroupIcon/>,
        text: "People & Groups"
    },
    {
        icons:<AppsIcon/>,
        text: "More"
    },
]