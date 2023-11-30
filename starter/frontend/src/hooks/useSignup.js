import { useNavigate } from "react-router-dom";

const useSignup = (email, password, password2, setIsAuthenticated, url) => {
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (password !== password2) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json();
                sessionStorage.setItem("user", JSON.stringify(user));
                console.log("User signed up successfully!");
                setIsAuthenticated(true);
                navigate("/");
            } else {
                console.error("Signup failed");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    }; 
    return {
        handleSignup
    }
}

export default useSignup;



