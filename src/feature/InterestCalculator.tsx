import { useState } from 'react';

import { Section } from '../layout/Section';

const InterestCalculator = () => {
  const [activeTab, setActiveTab] = useState<'saving' | 'fd'>('saving');

  return (
    <Section yPadding="py-12">
      <div
        id="calculator"
        className="mx-auto max-w-6xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Interest Comparison Calculator
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Compare bank interest clearly — without hidden rules
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex justify-center gap-2">
          <button
            onClick={() => setActiveTab('saving')}
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              activeTab === 'saving'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Savings Account
          </button>

          <button
            onClick={() => setActiveTab('fd')}
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              activeTab === 'fd'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Fixed Deposit
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <label className="text-sm text-gray-700">Amount (₹)</label>
            <input
              type="number"
              defaultValue={activeTab === 'saving' ? 50000 : 100000}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Duration</label>
            <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm">
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Age Group</label>
            <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm">
              <option>18 – 60</option>
              <option>Senior Citizen</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700">Category</label>
            <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm">
              <option>General</option>
              <option>Women</option>
            </select>
          </div>
        </div>

        {/* Action */}
        <div className="mt-6 text-center">
          <button className="rounded-md bg-primary-500 px-6 py-2 text-sm font-medium text-white">
            Update Results
          </button>
        </div>

        {/* Result Table */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="border px-4 py-2">Bank</th>
                <th className="border px-4 py-2">Interest Rate</th>
                <th className="border px-4 py-2">Duration</th>
                <th className="border px-4 py-2">Estimated Return</th>
                <th className="border px-4 py-2">Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Bank A</td>
                <td className="border px-4 py-2">6.5%</td>
                <td className="border px-4 py-2">1 Year</td>
                <td className="border px-4 py-2">₹3,250</td>
                <td className="border px-4 py-2 text-green-600">+₹450</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Bank B</td>
                <td className="border px-4 py-2">5.6%</td>
                <td className="border px-4 py-2">1 Year</td>
                <td className="border px-4 py-2">₹2,800</td>
                <td className="border px-4 py-2 text-gray-500">Base</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export { InterestCalculator };
