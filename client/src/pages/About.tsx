import { useEffect } from "react";
import { Target, Users, TrendingUp, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - NATIONAL STEEL & ALLOYS";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-background/90">
            Your Trusted Partner in Steel & Alloys
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                NATIONAL STEEL & ALLOYS is a premier importer, stockist, and supplier of high-quality steel 
                and alloy products. Under the leadership of our CEO, Champak Sain, we have established ourselves 
                as a trusted name in the industry.
              </p>
              <p>
                With over two decades of experience, we specialize in providing premium grade Stainless Steel, 
                Alloy Steel, Carbon Steel, and Mild Steel products to industries across India. Our extensive 
                inventory includes pipes, tubes, sheets, plates, round bars, flat bars, and more.
              </p>
              <p>
                Located in Mumbai (GST No.: 27AJJPN4917B2Z9), we serve clients nationwide with a commitment 
                to quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Company Information</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-primary">Company Name</p>
                <p className="text-muted-foreground">NATIONAL STEEL & ALLOYS</p>
              </div>
              <div>
                <p className="font-semibold text-primary">GST Number</p>
                <p className="text-muted-foreground" data-testid="text-gst">27AJJPN4917B2Z9</p>
              </div>
              <div>
                <p className="font-semibold text-primary">CEO</p>
                <p className="text-muted-foreground" data-testid="text-ceo">Champak Sain</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Contact</p>
                <p className="text-muted-foreground">Mobile: 9769339987</p>
                <p className="text-muted-foreground">Tel: 022 6743 6635</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Email</p>
                <p className="text-muted-foreground">nationalstainless@yahoo.com</p>
              </div>
              <div>
                <p className="font-semibold text-primary">Address</p>
                <p className="text-muted-foreground">
                  45/49, Gulam Mohammad Building,<br />
                  M.S. Bawan Patel Road, Ramagalli,<br />
                  Mumbai-400 004
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                We never compromise on the quality of our products and services
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our top priority in everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-sm text-muted-foreground">
                Consistent delivery and dependable service you can count on
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Striving for excellence in every aspect of our business
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Extensive inventory of premium steel and alloy products</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Complete material test certificates and documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Competitive pricing without compromising on quality</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Fast and reliable delivery across India</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Expert technical support and consultation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Over 20 years of industry experience</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
