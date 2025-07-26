import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { API_BASE_URI } from "../../../config";
import axios from "axios";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        email: "parasuraman@gmail.com",
        password: "welcome",
    })
    const handleOnchage = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`${API_BASE_URI}auth/login`, {
            email: userData.email,
            password: userData.password,
        }).then((res) => {
            localStorage.setItem("token", res.token)
        }).catch((error) => {
            console.error(error);

        })

    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex w-full max-w-6xl">

                <div className="w-1/2 hidden md:block">
                    <img
                        src="/src/assets/retro_element.jpg"
                        alt="Login"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-2xl font-bold mb-1">Login In</h2>
                    <p className="text-gray-600 mb-6">Join us today! Enter your details to login your account.</p>

                    <form onSubmit={handleLogin}>


                        <div className="mb-4">
                            <Label htmlFor="pokemon">Email</Label>
                            <Input type="text" name="email" value={userData.email} placeholder="you@example.com" onChange={handleOnchage} />
                        </div>

                        <div className="mb-4 relative w-full">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={userData.password}
                                    placeholder="••••••••"
                                    className="pr-12"
                                    onChange={handleOnchage}

                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black p-1"
                                >
                                    {showPassword ? (
                                        <Eye className="w-5 h-5" strokeWidth={1.5} />
                                    ) : (
                                        <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                                    )}
                                </button>
                            </div>
                        </div>







                        {/* <ul className="text-sm text-gray-600 mb-4">
                        <li className="text-green-600">✓ At least 8 characters</li>
                        <li className="text-green-600">✓ At least one number</li>
                        <li className="text-red-600">✗ At least one special character</li>
                    </ul> */}

                        <Button className="w-full text-center">LOGIN ACCOUNT</Button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;