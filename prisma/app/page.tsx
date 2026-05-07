import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Navigation from '@/components/Navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Navigation session={session} />
      
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CareerForge
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Create professional resumes, CVs, and cover letters with AI assistance
          </p>
          <p className="text-lg mb-8 opacity-80">
            ☕ Completely free with optional coffee donations
          </p>
          
          {!session ? (
            <div className="flex gap-4 justify-center mb-12">
              <Link href="/auth/signup" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Get Started
              </Link>
              <Link href="/auth/signin" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Sign In
              </Link>
            </div>
          ) : (
            <Link href="/dashboard" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-block">
              Go to Dashboard
            </Link>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Beautiful Templates</h3>
              <p className="text-gray-600">
                Choose from multiple professionally designed resume and CV templates
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered</h3>
              <p className="text-gray-600">
                Get intelligent suggestions and content improvements powered by OpenAI
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">Cover Letters</h3>
              <p className="text-gray-600">
                Generate compelling cover letters tailored to specific job postings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-600">Create an account as an individual or organization</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Build Your Resume</h3>
                <p className="text-gray-600">Choose a template and fill in your details. AI suggestions included!</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Generate Cover Letter</h3>
                <p className="text-gray-600">Let AI help you craft a compelling cover letter</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Export & Share</h3>
                <p className="text-gray-600">Download as PDF or share your public profile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Create your professional resume and cover letter today
          </p>
          {!session && (
            <Link href="/auth/signup" className="btn-primary">
              Sign Up Now
            </Link>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Built with ❤️ for job seekers and organizations</p>
          <p className="text-gray-400">
            © 2024 CareerForge. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
