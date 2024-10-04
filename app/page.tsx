import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Aurora gradients */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 opacity-10 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-500 via-purple-500 to-transparent opacity-15 blur-3xl"></div>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-2xl px-6 py-8 sm:py-12 lg:pt-24">
        {/* Title, social icons, and theme toggle */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center justify-between mb-4 sm:mb-8">
          <div className="flex w-full justify-between items-center">
            <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
              Jarrod Watts
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2 sm:space-x-4">
                <Link
                  href="https://twitter.com/@jarrodwattsdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="sr-only">X (formerly Twitter)</span>
                </Link>
                <Link
                  href="https://youtube.com/@jarrodwatts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://github.com/jarrodwatts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/jarrodwatts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-4">
          I help make developer tools a joy to use.
        </p>

        <p className="text-sm sm:text-base  mb-8">
          I am currently the <strong>director of developer relations</strong> at{" "}
          <strong>Cube Labs</strong> contributing to{" "}
          <Link href="https://abs.xyz/" target="_blank" className="underline">
            Abstract
          </Link>
          , where I write documentation, create educational content, and support
          the developer community; with the goal of improving the{" "}
          <strong>developer experience</strong>.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-4">Work History</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Company</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2024</TableCell>
              <TableCell className="font-semibold">
                Director of Developer Relations
              </TableCell>
              <TableCell className="text-muted-foreground">Cube Labs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023</TableCell>
              <TableCell className="font-semibold">
                Senior Developer Relations Engineer
              </TableCell>
              <TableCell className="text-muted-foreground">
                Polygon Labs
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2022</TableCell>
              <TableCell className="font-semibold">
                Developer Relations Engineer
              </TableCell>
              <TableCell className="text-muted-foreground">Thirdweb</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2019</TableCell>
              <TableCell className="font-semibold">Software Engineer</TableCell>
              <TableCell className="text-muted-foreground">Quantium</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
