import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <!-- start: Sidebar --> */}
    <div className="fixed left-0 top-0 w-64 h-full bg-blue-500 p-4 z-50 sidebar-menu transition-transform">
        <a href="#" className="flex items-center pb-4 border-b border-b-blue-800">
            <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover"/>
            <span className="text-lg font-bold text-white ml-3">Logo</span>
        </a>
        <ul className="mt-4">
            <li className="mb-1 group active">
                <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-200 hover:text-blue-500 rounded-md group-[.selected]:bg-blue-950 group-[.selected]:text-gray-100">
                    <i className="ri-home-2-line mr-3 text-lg"></i>
                    <span className="text-sm">Dashboard</span>
                </a>
            </li>
            <li className="mb-1 group">
                <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-200 hover:text-blue-500 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-blue-200 group-[.selected]:text-blue-500 sidebar-dropdown-toggle ">
                    <i className="ri-shopping-cart-2-line mr-3 text-lg"></i>
                    <span className="text-sm">Penjualan</span>
                    <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                </a>
                <ul className="pl-10 mt-5 hidden group-[.selected]:block">
                    <li className="mb-4">
                        <a href="#" className="text-white text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:mr-3">Kasir</a>
                    </li> 
                    <li className="mb-4">
                        <a href="#" className="text-white text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:mr-3">Penjualan</a>
                    </li> 
                    <li className="mb-4">
                        <a href="#" className="text-white text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:mr-3">Persediaan</a>
                    </li> 
                </ul>
            </li>
            <li className="mb-1 group">
                <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-200 hover:text-blue-500 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-blue-200 group-[.selected]:text-blue-500 sidebar-dropdown-toggle">
                  <i className="ri-shopping-bag-line mr-3 text-lg"></i>
                    <span className="text-sm">Pembelian</span>
                </a>
            </li>
            <li className="mb-1 group">
                <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-blue-200 hover:text-blue-500 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-blue-200 group-[.selected]:text-blue-500 sidebar-dropdown-toggle">
                    <i className="ri-briefcase-4-line mr-3 text-lg"></i>
                    <span className="text-sm">Master Data</span>
                    <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                </a>
                <ul className="pl-10 mt-5 hidden group-[.selected]:block">
                    <li className="mb-4">
                        <a href="#" className="text-white text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:mr-3">Produk</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-white text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:mr-3">Data Suplier</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-white text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-white before:mr-3">Data Pelanggan</a>
                    </li>
                </ul>
            </li>
            <li className="absolute mb-1 group bottom-3 w-56">
                <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-200 hover:text-blue-500 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    <i className="ri-settings-2-line mr-3 text-lg"></i>
                    <span className="text-sm">Pengaturan</span>
                </a>
            </li>
        </ul>
    </div>
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
    {/* <!-- end: Sidebar --> */}

    {/* <!-- start: Main --> */}
    <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
      <div className="h-16 py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <button type="button" className="text-lg text-gray-600 sidebar-toggle">
            <i className="ri-menu-line"></i>
        </button>
        <ul className="flex items-center text-sm ml-4">
          <h1 href="#" className="text-blue-600 font-bold text-2xl">SMARTGROSIR</h1>
          <span className="text-xs text-blue-400 px-2 py-0.5 mx-3 bg-blue-100 border border-blue-400 rounded-md">Lite</span>
        </ul>
        <ul className="ml-auto flex items-center">
          <li className="dropdown ml-3">
              <button type="button" className="dropdown-toggle flex items-center">
                <img src="https://placehold.co/32x32" alt="" className="w-10 h-10 rounded-full block object-cover align-middle"/>
              </button>
              <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                <li>
                  <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                </li>
              </ul>
          </li>
        </ul>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-md shadow-black/5">
            <div>
                <div className="mb-10">
                  <div className="text-sm font-medium text-gray-400">Total Pendapatan Bulan ini</div>
                  <div className="text-2xl font-semibold mb-1">Rp. 0</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-400">Total Pendapatan Bulan ini</div>
                  <div className="text-2xl font-semibold mb-1">Rp. 0</div>
                </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-md shadow-black/5">
            <div>
                <div className="mb-10">
                  <div className="text-sm font-medium text-gray-400">Penjualan Bulan ini</div>
                  <div className="text-2xl font-semibold mb-1">Rp. 0</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-400">Penjualan Hari ini</div>
                  <div className="text-2xl font-semibold mb-1">Rp. 0</div>
                </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-md shadow-black/5">
            <div>
                <div className="mb-10">
                  <div className="text-sm font-medium text-gray-400">Penjualan Offline Hari ini</div>
                  <div className="text-2xl font-semibold mb-1">Rp. 0</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-400">Penjualan Online Hari ini</div>
                  <div className="text-2xl font-semibold mb-1">Rp. 0</div>
                </div>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 lg:p-14 p-5 rounded-3xl lg:col-span-2">
                <div className="flex justify-between mb-4 items-start">
                    <div className="font-bold text-2xl mb-5">Grafik Penjualan Tahun 2023</div>
                </div>
                <div className="w-full h-full">
                  <canvas id="order-chart"></canvas>
                </div>
            </div>
        </div>
      </div>
    </main>
    {/* <!-- end: Main --> */}
    </>
  )
}

export default App
