import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Badge } from "./ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const SKILL_TREND_DATA = {
  "React": [
    { month: "Jan", demand: 85 },
    { month: "Feb", demand: 87 },
    { month: "Mar", demand: 86 },
    { month: "Apr", demand: 89 },
    { month: "May", demand: 91 },
    { month: "Jun", demand: 88 },
    { month: "Jul", demand: 90 },
    { month: "Aug", demand: 92 },
    { month: "Sep", demand: 94 },
    { month: "Oct", demand: 93 },
    { month: "Nov", demand: 95 },
    { month: "Dec", demand: 96 },
  ],
  "TypeScript": [
    { month: "Jan", demand: 72 },
    { month: "Feb", demand: 75 },
    { month: "Mar", demand: 78 },
    { month: "Apr", demand: 82 },
    { month: "May", demand: 85 },
    { month: "Jun", demand: 87 },
    { month: "Jul", demand: 89 },
    { month: "Aug", demand: 91 },
    { month: "Sep", demand: 93 },
    { month: "Oct", demand: 95 },
    { month: "Nov", demand: 97 },
    { month: "Dec", demand: 98 },
  ],
  "jQuery": [
    { month: "Jan", demand: 45 },
    { month: "Feb", demand: 43 },
    { month: "Mar", demand: 42 },
    { month: "Apr", demand: 40 },
    { month: "May", demand: 38 },
    { month: "Jun", demand: 36 },
    { month: "Jul", demand: 34 },
    { month: "Aug", demand: 32 },
    { month: "Sep", demand: 30 },
    { month: "Oct", demand: 28 },
    { month: "Nov", demand: 26 },
    { month: "Dec", demand: 24 },
  ],
  "Python": [
    { month: "Jan", demand: 88 },
    { month: "Feb", demand: 89 },
    { month: "Mar", demand: 90 },
    { month: "Apr", demand: 91 },
    { month: "May", demand: 92 },
    { month: "Jun", demand: 93 },
    { month: "Jul", demand: 94 },
    { month: "Aug", demand: 95 },
    { month: "Sep", demand: 96 },
    { month: "Oct", demand: 96 },
    { month: "Nov", demand: 97 },
    { month: "Dec", demand: 98 },
  ],
};

interface TrendChartProps {
  skills: string[];
}

const COLORS = ["hsl(187, 92%, 55%)", "hsl(142, 71%, 45%)", "hsl(38, 92%, 50%)", "hsl(346, 77%, 60%)"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-3 border border-border">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground">{entry.dataKey}:</span>
            <span className="font-mono font-medium">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const TrendChart = ({ skills }: TrendChartProps) => {
  // Get data for selected skills, or show default if none selected
  const displaySkills = skills.length > 0 
    ? skills.filter(s => SKILL_TREND_DATA[s as keyof typeof SKILL_TREND_DATA])
    : ["React", "TypeScript", "Python"];

  // Merge data for chart
  const mergedData = SKILL_TREND_DATA.React.map((item, idx) => {
    const dataPoint: any = { month: item.month };
    displaySkills.forEach((skill) => {
      const skillData = SKILL_TREND_DATA[skill as keyof typeof SKILL_TREND_DATA];
      if (skillData) {
        dataPoint[skill] = skillData[idx].demand;
      }
    });
    return dataPoint;
  });

  return (
    <section id="trends" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="success" className="mb-4">
            <TrendingUp className="w-3 h-3 mr-1" />
            Market Trends
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skill Demand Trajectories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time demand analysis based on job postings, GitHub activity, and industry trends.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            {displaySkills.map((skill, idx) => (
              <div key={skill} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }} 
                />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mergedData}>
                <defs>
                  {displaySkills.map((skill, idx) => (
                    <linearGradient key={skill} id={`gradient-${skill}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS[idx % COLORS.length]} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={COLORS[idx % COLORS.length]} stopOpacity={0} />
                    </linearGradient>
                  ))}
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(215, 20%, 55%)', fontSize: 12 }}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                {displaySkills.map((skill, idx) => (
                  <Area
                    key={skill}
                    type="monotone"
                    dataKey={skill}
                    stroke={COLORS[idx % COLORS.length]}
                    strokeWidth={2}
                    fill={`url(#gradient-${skill})`}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
