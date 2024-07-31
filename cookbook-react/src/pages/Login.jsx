import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">

    {/* //<!-- Login Form --> */}
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form>
            <div class="mb-4">
                <label for="username" class="block text-gray-700 mb-2">Username</label>
                <input type="text" id="username" name="username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
        </form>
        <p class="mt-6 text-center text-gray-600">Don't have an account? <Link to="/signup" class="text-blue-500 hover:underline">Sign Up</Link></p>
        {/* <!-- <p class="mt-6 text-center text-gray-600">Don't have an account? <a href="signup.html" class="text-blue-500 hover:underline">Sign Up</a></p> --> */}
    </div>

</div>

  )
}

export default Login