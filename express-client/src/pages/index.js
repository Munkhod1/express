import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>зураг</th>
              <th>нэр</th>
              <th>албан тушаал</th>
              <th>имэйл</th>
              <th>үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>email</td>
              <th>
                <button className="btn btn-outline btn-info btn-xs">
                  Засах
                </button>
                <button className="btn btn-outline btn-error btn-xs">
                  устгах
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
