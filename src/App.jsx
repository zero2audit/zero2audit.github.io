import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  BookOpen, 
  Code, 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Plus, 
  Trash2, 
  Edit, 
  Award,
  Target,
  TrendingUp,
  Shield,
  Moon,
  Sun,
  Linkedin,
  Send,
  Handshake,
  Users,
  MessageSquare,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Cyfrin Updraft - Solidity Fundamentals",
      provider: "Cyfrin",
      progress: 75,
      status: "In Progress",
      description: "Learn the fundamentals of Solidity and smart contract development",
      projects: [
        { name: "Simple Storage Contract", status: "Completed", repo: "https://github.com/example/simple-storage" },
        { name: "Fund Me DApp", status: "In Progress", repo: "" }
      ]
    },
    {
      id: 2,
      name: "Cyfrin Updraft - Advanced Foundry",
      provider: "Cyfrin",
      progress: 30,
      status: "In Progress",
      description: "Advanced smart contract development and testing with Foundry",
      projects: [
        { name: "NFT Marketplace", status: "Planned", repo: "" }
      ]
    },
    {
      id: 3,
      name: "Cyfrin Updraft - Security & Auditing",
      provider: "Cyfrin",
      progress: 0,
      status: "Planned",
      description: "Learn smart contract security and auditing techniques",
      projects: []
    },
    {
      id: 4,
      name: "OpenZeppelin Defender",
      provider: "OpenZeppelin",
      progress: 0,
      status: "Planned",
      description: "Learn to secure smart contracts with OpenZeppelin tools",
      projects: []
    }
  ])

  const [portfolioProjects, setPortfolioProjects] = useState([
    {
      id: 1,
      title: "DeFi Yield Farming Protocol",
      description: "A decentralized yield farming protocol with automated market making features",
      technologies: ["Solidity", "Hardhat", "React", "Web3.js"],
      status: "Completed",
      repo: "https://github.com/example/defi-protocol",
      demo: "https://defi-demo.example.com",
      courseId: 1
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "A full-featured NFT marketplace with minting, trading, and auction capabilities",
      technologies: ["Solidity", "IPFS", "Next.js", "Ethers.js"],
      status: "In Progress",
      repo: "https://github.com/example/nft-marketplace",
      demo: "",
      courseId: 2
    }
  ])

  const [blogPosts] = useState([
    {
      id: 1,
      title: "Welcome to My Journey!",
      excerpt: "This is the beginning of my public journey from zero to professional smart contract auditor. Follow along as I document my learnings, challenges, and successes...",
      date: "2024-06-30",
      tags: ["intro", "web3", "security"],
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Deep Dive: Understanding Reentrancy Attacks",
      excerpt: "Reentrancy is one of the most well-known smart contract vulnerabilities. In this post, we will break down how it works, look at famous examples, and learn how to prevent it...",
      date: "2024-06-23",
      tags: ["solidity", "security", "attacks"],
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Top 5 Tools for Solidity Developers in 2024",
      excerpt: "The right tools can make or break your development workflow. Here are my top 5 essential tools for any serious Solidity developer, from testing frameworks to security analyzers...",
      date: "2024-06-16",
      tags: ["tools", "foundry", "hardhat"],
      readTime: "5 min read"
    }
  ])

  const [partners] = useState([
    {
      id: 1,
      name: "Cyfrin",
      description: "Leading Web3 security education platform",
      logo: "🎓",
      website: "https://cyfrin.io"
    },
    {
      id: 2,
      name: "OpenZeppelin",
      description: "Secure smart contract development tools",
      logo: "🛡️",
      website: "https://openzeppelin.com"
    }
  ])

  const [testimonials] = useState([
    {
      id: 1,
      name: "Future Collaborator",
      role: "Smart Contract Developer",
      content: "This space is reserved for testimonials from future partners and clients.",
      avatar: "👤"
    }
  ])

  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const [newCourse, setNewCourse] = useState({
    name: '',
    provider: '',
    description: ''
  })

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    repo: '',
    demo: '',
    courseId: ''
  })

  const [isAddingCourse, setIsAddingCourse] = useState(false)
  const [isAddingProject, setIsAddingProject] = useState(false)

  const socialLinks = [
    { icon: Send, name: 'Telegram', href: 'https://t.me/Zero2Auditor', color: 'text-blue-500' },
    { icon: Twitter, name: 'X', href: 'https://x.com/zero2audit', color: 'text-black dark:text-white' },
    { icon: Github, name: 'GitHub', href: 'https://github.com/zero2audit/zero2audit.github.io', color: 'text-gray-600' },
    { icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/volodymyr-stetsenko-656014246/', color: 'text-blue-600' },
    { icon: Mail, name: 'Email', href: 'mailto:contact@zero2audit.com', color: 'text-red-500' },
  ]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const addCourse = () => {
    if (newCourse.name && newCourse.provider) {
      const course = {
        id: Date.now(),
        ...newCourse,
        progress: 0,
        status: "Planned",
        projects: []
      }
      setCourses([...courses, course])
      setNewCourse({ name: '', provider: '', description: '' })
      setIsAddingCourse(false)
    }
  }

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id))
    setPortfolioProjects(portfolioProjects.filter(project => project.courseId !== id))
  }

  const updateCourseProgress = (id, progress) => {
    setCourses(courses.map(course => 
      course.id === id 
        ? { 
            ...course, 
            progress, 
            status: progress === 0 ? "Planned" : progress === 100 ? "Completed" : "In Progress"
          }
        : course
    ))
  }

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject,
        technologies: newProject.technologies.split(',').map(tech => tech.trim()),
        status: "In Progress",
        courseId: parseInt(newProject.courseId) || null
      }
      setPortfolioProjects([...portfolioProjects, project])
      setNewProject({ title: '', description: '', technologies: '', repo: '', demo: '', courseId: '' })
      setIsAddingProject(false)
    }
  }

  const deleteProject = (id) => {
    setPortfolioProjects(portfolioProjects.filter(project => project.id !== id))
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribing email:', email)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  const totalProgress = courses.length > 0 ? Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length) : 0
  const completedCourses = courses.filter(course => course.status === "Completed").length
  const inProgressCourses = courses.filter(course => course.status === "In Progress").length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👾</span>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Zero2Audit
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <div className="hidden md:flex space-x-2">
                {socialLinks.slice(0, 3).map((link) => (
                  <Button key={link.name} variant="ghost" size="sm" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className={`h-4 w-4 mr-2 ${link.color}`} />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
            👾 Zero2Audit
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Web3 Security Journey & Startup — From Zero to Professional Auditor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              <BookOpen className="h-4 w-4 mr-2" />
              View Learning Progress
            </Button>
            <Button size="lg" variant="outline">
              <Code className="h-4 w-4 mr-2" />
              Explore Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Target className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{totalProgress}%</p>
                  <p className="text-sm text-muted-foreground">Overall Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{completedCourses}</p>
                  <p className="text-sm text-muted-foreground">Completed Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{inProgressCourses}</p>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold">{portfolioProjects.length}</p>
                  <p className="text-sm text-muted-foreground">Portfolio Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="courses">Learning</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="testimonials">Reviews</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Learning Journey</h2>
              <Dialog open={isAddingCourse} onOpenChange={setIsAddingCourse}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Course</DialogTitle>
                    <DialogDescription>
                      Add a new course to track your learning progress.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Course Name"
                      value={newCourse.name}
                      onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                    />
                    <Input
                      placeholder="Provider (e.g., Cyfrin, OpenZeppelin)"
                      value={newCourse.provider}
                      onChange={(e) => setNewCourse({...newCourse, provider: e.target.value})}
                    />
                    <Textarea
                      placeholder="Course Description"
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                    />
                    <Button onClick={addCourse} className="w-full">Add Course</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <CardDescription>{course.provider}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant={course.status === "Completed" ? "default" : course.status === "In Progress" ? "secondary" : "outline"}>
                          {course.status}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteCourse(course.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="w-full" />
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={course.progress}
                        onChange={(e) => updateCourseProgress(course.id, parseInt(e.target.value) || 0)}
                        className="mt-2"
                        placeholder="Update progress %"
                      />
                    </div>
                    {course.projects.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Course Projects:</h4>
                        <div className="space-y-1">
                          {course.projects.map((project, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span>{project.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {project.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Portfolio Projects</h2>
              <Dialog open={isAddingProject} onOpenChange={setIsAddingProject}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Project</DialogTitle>
                    <DialogDescription>
                      Add a new project to your portfolio.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      placeholder="Project Title"
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    />
                    <Textarea
                      placeholder="Project Description"
                      value={newProject.description}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    />
                    <Input
                      placeholder="Technologies (comma separated)"
                      value={newProject.technologies}
                      onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                    />
                    <Input
                      placeholder="GitHub Repository URL"
                      value={newProject.repo}
                      onChange={(e) => setNewProject({...newProject, repo: e.target.value})}
                    />
                    <Input
                      placeholder="Demo URL (optional)"
                      value={newProject.demo}
                      onChange={(e) => setNewProject({...newProject, demo: e.target.value})}
                    />
                    <select
                      className="w-full p-2 border rounded-md bg-background"
                      value={newProject.courseId}
                      onChange={(e) => setNewProject({...newProject, courseId: e.target.value})}
                    >
                      <option value="">Select Related Course (optional)</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                    <Button onClick={addProject} className="w-full">Add Project</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      {project.repo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                    {project.courseId && (
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          From: {courses.find(c => c.id === project.courseId)?.name}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Write Post
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Partners & Collaborators
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {partners.map((partner) => (
                  <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{partner.logo}</div>
                      <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 border-dashed border-primary/30">
                <CardContent className="p-8 text-center">
                  <Handshake className="w-12 h-12 mx-auto mb-4 text-primary/80" />
                  <p className="text-muted-foreground italic mb-2">
                    This space is reserved for future partners and projects I collaborate with.
                  </p>
                  <p className="font-semibold">Interested in working together? Get in touch!</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Testimonials & Reviews
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-dashed border-primary/30">
                <CardContent className="p-8 text-center">
                  <Quote className="w-12 h-12 mx-auto mb-4 text-primary/80" />
                  <p className="text-muted-foreground italic mb-2">
                    As I grow and collaborate on projects, I will add testimonials from partners and clients here.
                  </p>
                  <p className="font-semibold">This section is waiting for real stories!</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About Zero2Audit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>My Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      I'm Volodymyr, and this is my public journey from zero to becoming a professional smart contract auditor. 
                      I'm documenting every step of my learning process, from basic Solidity concepts to advanced security auditing techniques.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      This website serves as both my learning tracker and portfolio, showcasing the projects I build while progressing through 
                      various courses from Cyfrin, OpenZeppelin, and other leading Web3 education providers.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Path</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Current Focus</h4>
                        <p className="text-sm text-muted-foreground">Smart Contract Development & Security</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Primary Courses</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Cyfrin Updraft - Complete Solidity Course</li>
                          <li>• Cyfrin Updraft - Advanced Foundry</li>
                          <li>• Cyfrin Updraft - Security & Auditing</li>
                          <li>• OpenZeppelin Defender</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Goal</h4>
                        <p className="text-sm text-muted-foreground">Become a professional smart contract auditor and security researcher</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>
                    Follow my journey and connect with me on various platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <Button key={link.name} variant="outline" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className={`h-4 w-4 mr-2 ${link.color}`} />
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl border-2 border-primary/50 bg-card backdrop-blur-sm shadow-lg">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get weekly updates on my Web3 security journey, new blog posts, and audit reports.
            </p>
            {!subscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={!email}
                >
                  <Send className="w-4 h-4 mr-2" /> Subscribe
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center text-lg text-primary p-3 bg-primary/10 rounded-md">
                <CheckCircle className="w-6 h-6 mr-3" />
                Thank you for subscribing!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Zero2Audit. Built in public. From zero to professional auditor.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This journey is documented transparently to help others learn Web3 security.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} hover:opacity-80 transition-opacity`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

