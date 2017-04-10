require 'rubygems'
require 'bundler/setup'

task :default => :deploy

desc 'Deploy to Server'
task :deploy do
  print "Deploying website to Server\n"
  # system "s3_website push"
  system "rsync -az --delete-after $TRAVIS_BUILD_DIR/public/ web@ssh.juev.org:~/public/denis"
end # task: deploy
