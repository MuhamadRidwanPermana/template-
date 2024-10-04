import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main class="w-full md:w-full bg-gray-50 h-screen transition-all main">
      
          <div class="p-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div class="bg-white rounded-3xl border border-gray-100 p-10 shadow-md shadow-black/5">
                <div>
                    <div class="mb-10">
                      <div class="text-sm font-medium text-gray-400">Total Pendapatan Bulan ini</div>
                      <div class="text-2xl font-semibold mb-1">Rp. 0</div>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-400">Total Pendapatan Bulan ini</div>
                      <div class="text-2xl font-semibold mb-1">Rp. 0</div>
                    </div>
                </div>
              </div>
              <div class="bg-white rounded-3xl border border-gray-100 p-10 shadow-md shadow-black/5">
                <div>
                    <div class="mb-10">
                      <div class="text-sm font-medium text-gray-400">Penjualan Bulan ini</div>
                      <div class="text-2xl font-semibold mb-1">Rp. 0</div>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-400">Penjualan Hari ini</div>
                      <div class="text-2xl font-semibold mb-1">Rp. 0</div>
                    </div>
                </div>
              </div>
              <div class="bg-white rounded-3xl border border-gray-100 p-10 shadow-md shadow-black/5">
                <div>
                    <div class="mb-10">
                      <div class="text-sm font-medium text-gray-400">Penjualan Offline Hari ini</div>
                      <div class="text-2xl font-semibold mb-1">Rp. 0</div>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-400">Penjualan Online Hari ini</div>
                      <div class="text-2xl font-semibold mb-1">Rp. 0</div>
                    </div>
                </div>
              </div>

            </div>
            
              <DashboardCard08 />
             
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;