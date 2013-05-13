Wikitpage tools
====

#Generate md to html
```
 wg-html -m ../micloud.github.com/mdfiles/ -o ../micloud.github.com/html/ -t ../micloud.github.com/tools/template-single-page.html
```

#Generate all md to onepage html
```
 wg-onepage -o ../micloud.github.com/onepage.html -m ../micloud.github.com/mdfiles/ -c ../micloud.github.com/javascripts/tree.json -t ../micloud.github.com/tools/template.html
```

#Generate all md to rss feed xml file
```
 wg-rss -m ../micloud.github.com/mdfiles -c ../micloud.github.com/javascripts/tree.json -f ../micloud.github.com/feeds.xml -t ../micloud.github.com/tools/template.html
```

#Generate all md to site map xml file
```
 wg-sitemap -m ../micloud.github.com/mdfiles/ -o ../micloud.github.com/site-map.xml
```

#Generate tree config to ul/li tree html file
```
 wg-tree -o ../micloud.github.com/tree.html -c ../micloud.github.com/javascripts/tree.json
```
