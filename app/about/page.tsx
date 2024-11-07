import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const about = {
    introduction:
      "I'm Avijit Pal, a passionate Full Stack Developer with expertise in React, Next.js, and backend development. I enjoy crafting seamless digital experiences and solving complex technical challenges with elegant solutions.",
    skills: [
      'React', 'Next.js', 'JavaScript', 'Python', 'Java', 'Express.js', 'MongoDB', 'SQL', 'Spring', 'JWT', 'Tailwind CSS', 'UI/UX'
    ],
    experience: [
      {
        company: 'Shihaan Tech Global Inc',
        role: 'Software Developer',
        period: '2024 - Present',
      },
      {
        company: 'Amazon',
        role: 'Customer Service Representative',
        period: '2022 - 2023',
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-4xl font-bold tracking-tighter sm:text-5xl">
        About Me
      </h1>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-8 text-lg text-muted-foreground">
            {about.introduction}
          </p>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
          <div className="space-y-4">
            {about.experience.map((exp, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-1 font-semibold">{exp.company}</h3>
                <p className="mb-2 text-muted-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
