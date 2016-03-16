require 'rubygems'
require 'bundler/setup'

task :default => :deploy

desc 'Deploy to S3'
task :deploy do
  print "Deploying website to S3\n"
  system "s3_website push"
end # task: deploy

