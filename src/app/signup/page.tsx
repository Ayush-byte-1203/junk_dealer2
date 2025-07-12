import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center py-12 px-4 md:px-6">
       <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
}
