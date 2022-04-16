import React from 'react';

export default function RegisterForm() {
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-coolGray-900 dark:text-coolGray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm dark:text-coolGray-400">Register</p>
      </div>
      <form action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your full name"
              className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="hung@gmail.com"
              className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm">
              phone number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="0123345698"
              className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="confirmPassword" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button type="button" className="w-full px-8 py-3 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
              Register
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-coolGray-400">
            Already have an account?
            <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">
              Login
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
