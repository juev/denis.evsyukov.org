domain          = "denis.evsyukov.org"

public_dir      = "public"    # compiled site directory
source_dir      = "source"    # source file directory
deploy_dir      = "_deploy"   # deploy directory (for Github pages deployment)

deploy_branch   = "gh-pages"
deploy_default  = "push"

task :default => :build

desc 'Build site with Jekyll.'
  task :build => :clean do
  print "Compiling website...\n"
  system "jekyll"
  Rake::Task["minify"].execute
end

desc 'Clean public folder'
task :clean do
  print "Clean public folder.\n"
  system "rm -rf public/*"
end

desc 'Minify & Combi CSS/JS file'
task :minify do
  print "Minify file...\n"
  system "jammit -c _assets.yml -u http://#{domain} -o public"
end

desc 'Build, deploy.'
task :deploy => :build do
#  Rake::Task[:copydot].invoke(source_dir, public_dir)
# Rake::Task["#{deploy_default}"].execute
  # sh 's3cmd sync --acl-public --reduced-redundancy --no-preserve --add-header "Cache-Control: max-age=86400" --cf-invalidate public/* s3://denis.evsyukov.org/'
  print "Deploy site...\n"
  system "rsync -az --delete public/ evsyukov:/home/public/"
end
