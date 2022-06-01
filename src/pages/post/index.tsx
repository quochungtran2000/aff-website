import MainLayout from 'components/Layout';
import { useUser } from 'context/userContext';

const data = [
  {
    thumbnail:
      'https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb',
    title: '10 chiếc màn hình nên mua',
    content: 'Sau đâu là 10 cái màn hình đáng mua nhất năm 2021. Trong đó top 1 là chiếc màn ....',
  },
];

export default function PostPage() {
  return (
    // 480x360
    <MainLayout>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white"
          >
            <img
              src="https://cybershow.vn/wp-content/uploads/2019/04/team-building-da-nang-2-480x360.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                5 thiết bị cần mua để tiết kiệm 1 khoản khi đi du lịch
              </h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>
                Sau đây là 5 thiết bị cần mua trước khi đi du lịch để tiết kiệm được một khoảng chi phí rất lớn khi đi
                du lịch ở Vịnh Hạ Long. Thứ nhất nên mua kính râm, nón rơm trước ở nhà để tối ưu chi phí,...
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://asset-apac.unileversolutions.com/content/dam/unilever/knorr_world/vietnam/general_image/savoury/other_savoury/teaser_mon_ngon_tu_ca-1187671.jpg.ulenscale.480x360.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Muốn nấu ăn ngon thì không nên bỏ qua những thứ sau đây
                </h3>
                <span className="text-xs dark:text-gray-400">May 30, 2021</span>
                <p>Nhà nhà ai cũng muốn nấu ăn ngon nhưng thông thường sẽ bỏ qua những thứ này. Những thứ ...</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://insight.isb.edu.vn/wp-content/uploads/sites/2/2020/09/11-quyen-sach-ve-Growth-Hacking-dang-doc-nhat-2020_thumbnail-480x360.png"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Top 11 quyển sách đáng mua nhất năm 2022
                </h3>
                <span className="text-xs dark:text-gray-400">January 22, 2021</span>
                <p>Đây là danh sách 11 quyển sách đáng mua nhất năm dưới góc nhìn của tôi. Top 1 là quyển ....</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://goteak.vn/wp-content/uploads/2019/12/5726874286_bbd10a7d17_c-480x360.jpg"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Trải nghiệm mua hàng tại xưởng gỗ ABC
                </h3>
                <span className="text-xs dark:text-gray-400">January 23, 2021</span>
                <p>
                  Mình mua cái ghế bẹt tại xưởng gỗ ABC được 2 năm và sau đây là trải nghiệm của mình sau 2 năm trải
                  nghiệm
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?4"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">January 24, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                  perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                  indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?5"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">January 25, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                  perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                  indoctum pri.
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?6"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">January 26, 2021</span>
                <p>
                  Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
                  perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata
                  indoctum pri.
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-white dark:text-gray-400">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
