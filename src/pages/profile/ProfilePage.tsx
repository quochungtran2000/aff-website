import MainLayout from 'components/Layout';
import { useUser } from 'context/userContext';

export default function ProfilePage() {
  const { user } = useUser();
  console.log({ user });
  const imageUrl = 'https://joeschmoe.io/api/v1/user';
  return (
    <MainLayout>
      {/* <div className="h-screen w-1/3 m-auto my-20 bg-white px-5 rounded-md py-10">
        <div className="flex">
          <div className="w-1/5 bg-slate-100 rounded-lg">
            <img className="rounded-lg p-2 " src={user?.imgURL || imageUrl}></img>
          </div>
          <p>{user?.role ? user.role : ''}</p>

          <div className="ml-16 ">
            <p className="text-3xl font-bold mb-2 truncate ...">{user?.email}</p>
            <p className="truncate ... mb-2">
              Full Name: <span className="font-medium">{user?.fullname}</span>
            </p>
            <p className="truncate ...">
              Number Phone: <span className="font-medium">{user?.phoneNumber}</span>
            </p>
            <div className="my-10 flex">
              <button className="bg-red-700 py-3 px-8 rounded-lg text-white hover:bg-transparent hover:text-red-700 border-red-700 border-4 transition-all duration-500">
                Account Details
              </button>
              <button className="bg-black text-white rounded-lg py-3 px-4 ml-5">Log Out</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-12 gap-4 py-6">
        <div className="col-start-3 col-span-8 bg-dark">
          <section className="p-6">
            <form
              noValidate={true}
              action=""
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 text-black">
                <div className="col-span-full flex justify-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://source.unsplash.com/100x100/?random"
                      alt=""
                      className="w-250 h-250 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                      style={{ width: '250px', height: '250px' }}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid grid-cols-4 gap-6 p-2 rounded-md shadow-sm text-black">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Personal Inormation</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="address" className="text-sm">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="state" className="text-sm">
                      State / Province
                    </label>
                    <input
                      id="state"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="zip" className="text-sm">
                      ZIP / Postal
                    </label>
                    <input
                      id="zip"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm text-black">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Profile</p>
                  <p className="text-xs">Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="username" className="text-sm">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">
                      Website
                    </label>
                    <input
                      id="website"
                      type="text"
                      placeholder="https://"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">
                      Photo
                    </label>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://source.unsplash.com/30x30/?random"
                        alt=""
                        className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                      />
                      <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
