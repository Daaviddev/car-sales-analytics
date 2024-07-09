import React from 'react';

type Props = {};

const test = (props: Props) => {
  return (
    <div className="container px-4 pt-8 pb-8 sm:px-8">
      <div className=" min-h-[calc(100vh-200px)] mt-5">
        <div className="h-full">
          <div className="flex min-h-screen w-full flex-col">
            <div className="flex flex-col sm:gap-4 sm:py-4">
              <main class="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
                <div class=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div class="relative xl:col-span-2">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm panelCardProps">
                      <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                        <h3 class="tracking-tight text-sm font-medium">Ukupna Vrijednost</h3>
                      </div>
                      <div class="p-6 pt-0">
                        <div class="text-2xl font-bold">$12,000</div>
                        <p class="text-xs text-muted-foreground">This month</p>
                      </div>
                    </div>
                  </div>
                  <div class="relative xl:col-span-2">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm panelCardProps">
                      <div class="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                        <h3 class="tracking-tight text-sm font-medium">Ukupno Vozila</h3>
                      </div>
                      <div class="p-6 pt-0">
                        <div class="text-2xl font-bold">$1,200</div>
                        <p class="text-xs text-muted-foreground">This month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-5">
                  <h1 class="mb-10">Odaberi Kompanije</h1>
                  <div
                    role="group"
                    dir="ltr"
                    class="flex flex-wrap items-center bg-transparent gap-2 justify-start"
                    tabindex="-1"
                    style="outline: none;"
                  >
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-500 hover:bg-transparent truncate">
                      Sve
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      MK
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      EuroAuto-OS
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      AUTOMOBILI GALERIJA-OS
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      INTERAUTO-OS
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      OS AUTOMOBILI
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      MIX AUTO
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      Auto Smile
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      AUTO STOP - OS
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      ISLANDI CARS - ZD
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      SIMPA Auto - ZD
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      TODI CARS - ZD
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      A.M. Automotive - ZD
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      AXIS - ZD
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      Auto Reor
                    </button>
                    <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-zinc-500 hover:text-green-600 backdrop-blur-lg bg-transparent bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.10)] to-transparent hover:shadow rounded-md py-2 px-6 hover:shadow-green-600 duration-500 hover:bg-transparent">
                      Auto Aurum
                    </button>
                  </div>
                  <div class="mt-10 p-2 text-sm text-zinc-500">Odabrano: </div>
                </div>
                <div class="">
                  <div class="">
                    <div class="">
                      <div>
                        <h2 class="mb-2">Table Section</h2>{' '}
                      </div>
                      <div class="relative overflow-x-auto">
                        <div class="relative w-full overflow-auto">
                          <table class="caption-bottom text-sm w-full">
                            {' '}
                            <thead class="[&amp;_tr]:border-b">
                              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span></span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>Marka</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>Godina</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>KM</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>Cijena</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>DatumO</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>Status</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>Tvrtka</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                                <th
                                  class="h-12 align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 text-start text-xs text-gray-400"
                                  style="width: 150px;"
                                >
                                  <div class="flex items-center">
                                    <span>ID</span>
                                    <button class="ml-2">↕️</button>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="[&amp;_tr:last-child]:border-0"></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
