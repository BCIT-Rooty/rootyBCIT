import LoginForm from "./index.js";


export default { // storybook requires a default export which tells it which component to render
    title: "LoginForm",
    component: LoginForm,
};

export const DefaultForm = () => <LoginForm />; // any exports will be stories within storybook
export const IconForm = () => <LoginForm icons/>;
// export const WithOnLogin = () => <LoginForm onLogin={(email, password) => console.log(email, password)} />; // Example