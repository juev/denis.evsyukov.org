domain          = "denis.evsyukov.org"

public_dir      = "public"    # compiled site directory
source_dir      = "source"    # source file directory

task :default => :build

desc 'Build site with Middleman.'
  task :build => :clean do
  print "Compiling website...\n"
  system "middleman build"
end

desc 'Clean public folder'
task :clean do
  print "Clean public folder.\n"
  system "rm -rf #{public_dir}/*"
end

desc 'Build, deploy.'
task :deploy => :build do
  print "Deploy site...\n"
  system "rsync -az --delete public/ ec2:~/www/denis/"
  #system "s3cmd sync -P --delete-removed --no-preserve public/ s3://denis.evsyukov.org/"
  # system 's3cmd sync --acl-public --exclude "*.*" --include "*.png" --include "*.jpg" --include "*.ico" --add-header="Expires: Sat, 20 Nov 2020 18:46:39 GMT" --add-header="Cache-Control: max-age=6048000" --no-preserve public/ s3://denis.evsyukov.org/'
  # system 's3cmd sync --acl-public --exclude "*.*" --include  "*.css" --include "*.js" --add-header="Cache-Control: max-age=604800"  --no-preserve public/ s3://denis.evsyukov.org'
  # system 's3cmd sync --acl-public --exclude "*.*" --include "*.html" --add-header="Cache-Control: max-age=0, private, must-revalidate" --no-preserve public/ s3://denis.evsyukov.org'
  # system 's3cmd sync --acl-public --exclude ".DS_Store" --exclude "assets/" --exclude "js/" --no-preserve public/ s3://denis.evsyukov.org/'
  # system 's3cmd sync --acl-public --delete-removed --no-preserve public/ s3://denis.evsyukov.org/'
end
