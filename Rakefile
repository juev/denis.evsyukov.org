domain          = "denis.evsyukov.org"

public_dir      = "public"    # compiled site directory
source_dir      = "source"    # source file directory

task :default => :build

desc 'Build site with Jekyll.'
  task :build => :clean do
  print "Compiling website...\n"
  system "jekyll"
end

desc 'Clean public folder'
task :clean do
  print "Clean public folder.\n"
  system "rm -rf public/*"
end

desc 'Build, deploy.'
task :deploy => :build do
  print "Deploy site...\n"
  system "rsync -az --delete public/ ec2:~/www/denis/"
end
