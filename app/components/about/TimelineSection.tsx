'use client'

import { useState, useEffect } from 'react'
import { 
  FaRocket, 
  FaChartLine, 
  FaAward, 
  FaUsers,
  FaBuilding,
  FaLightbulb
} from 'react-icons/fa'
import { MdTimeline } from 'react-icons/md'

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState('2024')

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with focus on telecom compliance services',
      icon: <FaRocket />,
      color: 'bg-blue-500',
      achievements: ['First telecom client onboarded', 'Initial team of 3 experts'],
    },
    {
      year: '2015',
      title: 'DoT Partnership',
      description: 'Became authorized compliance partner for DoT',
      icon: <FaChartLine />,
      color: 'bg-green-500',
      achievements: ['Authorized DoT partner', 'Expanded service portfolio'],
    },
    {
      year: '2018',
      title: 'Major Expansion',
      description: 'Served 100+ telecom clients across India',
      icon: <FaUsers />,
      color: 'bg-purple-500',
      achievements: ['100+ clients milestone', 'Team expanded to 15+ experts'],
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched automated compliance platform',
      icon: <FaLightbulb />,
      color: 'bg-orange-500',
      achievements: ['Digital platform launch', 'Remote compliance services'],
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Awarded as top compliance service provider',
      icon: <FaAward />,
      color: 'bg-red-500',
      achievements: ['Industry awards received', 'ISO certification achieved'],
    },
    {
      year: '2024',
      title: 'Current Leadership',
      description: 'Leading telecom compliance services in India',
      icon: <FaBuilding />,
      color: 'bg-teal-500',
      achievements: ['50+ active clients', '25+ expert team', 'Pan-India presence'],
    },
  ]

  const activeMilestone = milestones.find(m => m.year === activeYear) || milestones[milestones.length - 1]

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = milestones.findIndex(m => m.year === activeYear)
      const nextIndex = (currentIndex + 1) % milestones.length
      setActiveYear(milestones[nextIndex].year)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeYear, milestones])

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a95b4] mb-4">
            Our Journey Through Years
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milestones in our pursuit of telecom compliance excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline Navigation */}
          <div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="flex items-start cursor-pointer group"
                    onClick={() => setActiveYear(milestone.year)}
                  >
                    <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${
                      activeYear === milestone.year 
                        ? `${milestone.color} text-white transform scale-110` 
                        : 'bg-white text-gray-400 border-2 border-gray-300'
                    } flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                      <div className="text-xl">
                        {milestone.icon}
                      </div>
                    </div>
                    <div className={`ml-6 flex-grow ${
                      activeYear === milestone.year ? 'opacity-100' : 'opacity-70 group-hover:opacity-90'
                    }`}>
                      <div className="flex items-center mb-2">
                        <span className={`text-2xl font-bold ${
                          activeYear === milestone.year ? 'text-[#0a95b4]' : 'text-gray-600'
                        }`}>
                          {milestone.year}
                        </span>
                        <span className="ml-4 text-lg font-semibold text-gray-800">
                          {milestone.title}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Milestone Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-[#0a95b4] mb-2">
                  <MdTimeline className="mr-2" />
                  <span className="font-semibold">Milestone Details</span>
                </div>
                <h3 className="text-3xl font-bold text-[#0a95b4]">{activeMilestone.year}</h3>
              </div>
              <div className={`w-16 h-16 rounded-full ${activeMilestone.color} text-white flex items-center justify-center`}>
                <div className="text-2xl">
                  {activeMilestone.icon}
                </div>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              {activeMilestone.title}
            </h4>
            <p className="text-lg text-gray-600 mb-8">
              {activeMilestone.description}
            </p>

            <div className="mb-8">
              <h5 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h5>
              <ul className="space-y-3">
                {activeMilestone.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Growth Progress</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${activeMilestone.color} rounded-full transition-all duration-1000`}
                  style={{ 
                    width: `${(milestones.findIndex(m => m.year === activeYear) + 1) * (100 / milestones.length)}%` 
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>2020</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection