import { store } from 'react-notifications-component';

const notify = (message, reload = false) => {
    store.addNotification({
        title: "",
        message: message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
        duration: 3000,
        onScreen: true
        }
    });
    
    if(reload)
        location.reload()
}
export default notify