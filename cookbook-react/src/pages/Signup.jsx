import React from 'react'

const Signup = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">

    {/* <!-- Signup Form --> */}
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form action="/signup" method="POST" id="signupform">
        {/* <!-- <form action="/" id="signupform"> --> */}
            <div class="mb-4">
                <label for="username" class="block text-gray-700 mb-2">Username</label>
                <input type="text" id="username" name="username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                <span id="passwordError" class="text-red-500 text-sm"></span>
            </div>
            <div class="mb-6">
                <label for="confirm-password" class="block text-gray-700 mb-2">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                <span id="confirmPasswordError" class="text-red-500 text-sm"></span>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
        </form>
        <p class="mt-6 text-center text-gray-600">Already have an account? <a href="/login" class="text-blue-500 hover:underline">Login</a></p>
        {/* <!-- <p class="mt-6 text-center text-gray-600">Already have an account? <a href="login.html" class="text-blue-500 hover:underline">Login</a></p> --> */}
    </div>
    </div>
  )
}

export default Signup