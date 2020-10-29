import { store } from 'react-notifications-component';

const notify = (message, reload = false, type = "success") => {
    const notificationOption = {
        title: "",
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"]
    }
    if(type === "success")
    {
        notificationOption.dismiss = {
            duration: 3000,
            onScreen: true
        }
    }
    store.addNotification(notificationOption)
    
    if(reload) {
        setTimeout( () => location.reload(), 3000)
    }
        
}
export default notify