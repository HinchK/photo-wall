(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="image000000-1" style="background-image: url('/photos/tint/image000000-1-65ba1d.jpg')" title="image000000-1">
  <img class="lazyload" data-src="/photos/thumbnail/image000000-1-ccf4df.jpg" src="/photos/tint/image000000-1-65ba1d.jpg" height="504" width="672" />
  <span class="full">
    <span style="background-image: url('/photos/large/image000000-1-686656.jpg')"></span>
  </span>
  <a class="open" href="/image000000-1" data-target="image000000-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/imagejpeg" data-target="imagejpeg" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="imagejpeg" style="background-image: url('/photos/tint/imagejpeg-65ba1d.jpg')" title="imagejpeg">
  <img class="lazyload" data-src="/photos/thumbnail/imagejpeg-ccf4df.jpg" src="/photos/tint/imagejpeg-65ba1d.jpg" height="427" width="636" />
  <span class="full">
    <span style="background-image: url('/photos/large/imagejpeg-686656.jpg')"></span>
  </span>
  <a class="open" href="/imagejpeg" data-target="imagejpeg">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/image000000-1" data-target="image000000-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/xxeddyconcerned" data-target="xxeddyconcerned" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="xxeddyconcerned" style="background-image: url('/photos/tint/xxEddyConcerned-65ba1d.jpg')" title="xxEddyConcerned">
  <img class="lazyload" data-src="/photos/thumbnail/xxEddyConcerned-ccf4df.jpg" src="/photos/tint/xxEddyConcerned-65ba1d.jpg" height="1766" width="1766" />
  <span class="full">
    <span style="background-image: url('/photos/large/xxEddyConcerned-686656.jpg')"></span>
  </span>
  <a class="open" href="/xxeddyconcerned" data-target="xxeddyconcerned">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/imagejpeg" data-target="imagejpeg" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/zzlomaclub" data-target="zzlomaclub" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>SM-A716U</li>
    <li>69/10000</li>
    <li><span class="aperture"><em>f</em>/</span>2.2</li>
	</ul> -->
</li>
<li class="item " id="zzlomaclub" style="background-image: url('/photos/tint/zzLomaClub-65ba1d.jpeg')" title="zzLomaClub">
  <img class="lazyload" data-src="/photos/thumbnail/zzLomaClub-ccf4df.jpeg" src="/photos/tint/zzLomaClub-65ba1d.jpeg" height="640" width="640" />
  <span class="full">
    <span style="background-image: url('/photos/large/zzLomaClub-686656.jpeg')"></span>
  </span>
  <a class="open" href="/zzlomaclub" data-target="zzlomaclub">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/xxeddyconcerned" data-target="xxeddyconcerned" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-9578" data-target="img-9578" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone 12 Pro Max</li>
    <li>1/5376</li>
    <li><span class="aperture"><em>f</em>/</span>1.6</li>
	</ul> -->
</li>
<li class="item " id="img-9578" style="background-image: url('/photos/tint/IMG_9578-65ba1d.jpg')" title="IMG_9578">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_9578-ccf4df.jpg" src="/photos/tint/IMG_9578-65ba1d.jpg" height="3024" width="4032" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_9578-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-9578" data-target="img-9578">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/zzlomaclub" data-target="zzlomaclub" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-0226" data-target="img-0226" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>iPhone XS</li>
    <li>1/1536</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="img-0226" style="background-image: url('/photos/tint/IMG_0226-65ba1d.jpg')" title="IMG_0226">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_0226-ccf4df.jpg" src="/photos/tint/IMG_0226-65ba1d.jpg" height="888" width="677" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_0226-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-0226" data-target="img-0226">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-9578" data-target="img-9578" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/image0000001" data-target="image0000001" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="image0000001" style="background-image: url('/photos/tint/image0000001-65ba1d.jpg')" title="image0000001">
  <img class="lazyload" data-src="/photos/thumbnail/image0000001-ccf4df.jpg" src="/photos/tint/image0000001-65ba1d.jpg" height="1024" width="768" />
  <span class="full">
    <span style="background-image: url('/photos/large/image0000001-686656.jpg')"></span>
  </span>
  <a class="open" href="/image0000001" data-target="image0000001">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-0226" data-target="img-0226" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/image000000" data-target="image000000" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="image000000" style="background-image: url('/photos/tint/image000000-65ba1d.jpg')" title="image000000">
  <img class="lazyload" data-src="/photos/thumbnail/image000000-ccf4df.jpg" src="/photos/tint/image000000-65ba1d.jpg" height="1280" width="960" />
  <span class="full">
    <span style="background-image: url('/photos/large/image000000-686656.jpg')"></span>
  </span>
  <a class="open" href="/image000000" data-target="image000000">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/image0000001" data-target="image0000001" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/image000000-3" data-target="image000000-3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="image000000-3" style="background-image: url('/photos/tint/image000000-3-65ba1d.jpg')" title="image000000-3">
  <img class="lazyload" data-src="/photos/thumbnail/image000000-3-ccf4df.jpg" src="/photos/tint/image000000-3-65ba1d.jpg" height="2459" width="1944" />
  <span class="full">
    <span style="background-image: url('/photos/large/image000000-3-686656.jpg')"></span>
  </span>
  <a class="open" href="/image000000-3" data-target="image000000-3">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/image000000" data-target="image000000" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/image000000-2" data-target="image000000-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="image000000-2" style="background-image: url('/photos/tint/image000000-2-65ba1d.jpg')" title="image000000-2">
  <img class="lazyload" data-src="/photos/thumbnail/image000000-2-ccf4df.jpg" src="/photos/tint/image000000-2-65ba1d.jpg" height="1944" width="2592" />
  <span class="full">
    <span style="background-image: url('/photos/large/image000000-2-686656.jpg')"></span>
  </span>
  <a class="open" href="/image000000-2" data-target="image000000-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/image000000-3" data-target="image000000-3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/image000000-copy" data-target="image000000-copy" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="image000000-copy" style="background-image: url('/photos/tint/image000000%20copy-65ba1d.jpeg')" title="image000000 copy">
  <img class="lazyload" data-src="/photos/thumbnail/image000000%20copy-ccf4df.jpeg" src="/photos/tint/image000000%20copy-65ba1d.jpeg" height="966" width="719" />
  <span class="full">
    <span style="background-image: url('/photos/large/image000000%20copy-686656.jpeg')"></span>
  </span>
  <a class="open" href="/image000000-copy" data-target="image000000-copy">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/image000000-2" data-target="image000000-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/eddie-st-paddys" data-target="eddie-st-paddys" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="eddie-st-paddys" style="background-image: url('/photos/tint/eddie-st-paddys-65ba1d.jpeg')" title="eddie-st-paddys">
  <img class="lazyload" data-src="/photos/thumbnail/eddie-st-paddys-ccf4df.jpeg" src="/photos/tint/eddie-st-paddys-65ba1d.jpeg" height="966" width="719" />
  <span class="full">
    <span style="background-image: url('/photos/large/eddie-st-paddys-686656.jpeg')"></span>
  </span>
  <a class="open" href="/eddie-st-paddys" data-target="eddie-st-paddys">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/image000000-copy" data-target="image000000-copy" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/eddie-and-shaun" data-target="eddie-and-shaun" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="eddie-and-shaun" style="background-image: url('/photos/tint/eddie-and-shaun-65ba1d.jpg')" title="eddie-and-shaun">
  <img class="lazyload" data-src="/photos/thumbnail/eddie-and-shaun-ccf4df.jpg" src="/photos/tint/eddie-and-shaun-65ba1d.jpg" height="640" width="480" />
  <span class="full">
    <span style="background-image: url('/photos/large/eddie-and-shaun-686656.jpg')"></span>
  </span>
  <a class="open" href="/eddie-and-shaun" data-target="eddie-and-shaun">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/eddie-st-paddys" data-target="eddie-st-paddys" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-screenshot-20211225-133128-messages-53604015253560" data-target="resized-screenshot-20211225-133128-messages-53604015253560" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-screenshot-20211225-133128-messages-53604015253560" style="background-image: url('/photos/tint/Resized_Screenshot_20211225-133128_Messages_53604015253560-65ba1d.jpeg')" title="Resized_Screenshot_20211225-133128_Messages_53604015253560">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Screenshot_20211225-133128_Messages_53604015253560-ccf4df.jpeg" src="/photos/tint/Resized_Screenshot_20211225-133128_Messages_53604015253560-65ba1d.jpeg" height="2400" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Screenshot_20211225-133128_Messages_53604015253560-686656.jpeg')"></span>
  </span>
  <a class="open" href="/resized-screenshot-20211225-133128-messages-53604015253560" data-target="resized-screenshot-20211225-133128-messages-53604015253560">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/eddie-and-shaun" data-target="eddie-and-shaun" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-screenshot-20211222-135158-photos-106599974168291" data-target="resized-screenshot-20211222-135158-photos-106599974168291" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-screenshot-20211222-135158-photos-106599974168291" style="background-image: url('/photos/tint/Resized_Screenshot_20211222-135158_Photos_106599974168291-65ba1d.jpg')" title="Resized_Screenshot_20211222-135158_Photos_106599974168291">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Screenshot_20211222-135158_Photos_106599974168291-ccf4df.jpg" src="/photos/tint/Resized_Screenshot_20211222-135158_Photos_106599974168291-65ba1d.jpg" height="1556" width="1080" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Screenshot_20211222-135158_Photos_106599974168291-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-screenshot-20211222-135158-photos-106599974168291" data-target="resized-screenshot-20211222-135158-photos-106599974168291">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-screenshot-20211225-133128-messages-53604015253560" data-target="resized-screenshot-20211225-133128-messages-53604015253560" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20211217-141949-1" data-target="resized-resized-20211217-141949-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20211217-141949-1" style="background-image: url('/photos/tint/Resized_Resized_20211217_141949(1)-65ba1d.jpg')" title="Resized_Resized_20211217_141949(1)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20211217_141949(1)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20211217_141949(1)-65ba1d.jpg" height="768" width="1024" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20211217_141949(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20211217-141949-1" data-target="resized-resized-20211217-141949-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-screenshot-20211222-135158-photos-106599974168291" data-target="resized-screenshot-20211222-135158-photos-106599974168291" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20211031-164119-1" data-target="resized-resized-20211031-164119-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20211031-164119-1" style="background-image: url('/photos/tint/Resized_Resized_20211031_164119(1)-65ba1d.jpg')" title="Resized_Resized_20211031_164119(1)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20211031_164119(1)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20211031_164119(1)-65ba1d.jpg" height="1024" width="768" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20211031_164119(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20211031-164119-1" data-target="resized-resized-20211031-164119-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20211217-141949-1" data-target="resized-resized-20211217-141949-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20211015-152847-08-1" data-target="resized-resized-20211015-152847-08-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20211015-152847-08-1" style="background-image: url('/photos/tint/Resized_Resized_20211015_152847_08(1)-65ba1d.jpg')" title="Resized_Resized_20211015_152847_08(1)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20211015_152847_08(1)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20211015_152847_08(1)-65ba1d.jpg" height="767" width="1024" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20211015_152847_08(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20211015-152847-08-1" data-target="resized-resized-20211015-152847-08-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20211031-164119-1" data-target="resized-resized-20211031-164119-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20211015-140243-1" data-target="resized-resized-20211015-140243-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20211015-140243-1" style="background-image: url('/photos/tint/Resized_Resized_20211015_140243(1)-65ba1d.jpg')" title="Resized_Resized_20211015_140243(1)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20211015_140243(1)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20211015_140243(1)-65ba1d.jpg" height="1024" width="576" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20211015_140243(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20211015-140243-1" data-target="resized-resized-20211015-140243-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20211015-152847-08-1" data-target="resized-resized-20211015-152847-08-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20210923-142018-7" data-target="resized-resized-20210923-142018-7" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20210923-142018-7" style="background-image: url('/photos/tint/Resized_Resized_20210923_142018(7)-65ba1d.jpg')" title="Resized_Resized_20210923_142018(7)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20210923_142018(7)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20210923_142018(7)-65ba1d.jpg" height="768" width="1024" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20210923_142018(7)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20210923-142018-7" data-target="resized-resized-20210923-142018-7">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20211015-140243-1" data-target="resized-resized-20211015-140243-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20210618-184829-1" data-target="resized-resized-20210618-184829-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20210618-184829-1" style="background-image: url('/photos/tint/Resized_Resized_20210618_184829(1)-65ba1d.jpg')" title="Resized_Resized_20210618_184829(1)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20210618_184829(1)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20210618_184829(1)-65ba1d.jpg" height="768" width="1024" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20210618_184829(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20210618-184829-1" data-target="resized-resized-20210618-184829-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20210923-142018-7" data-target="resized-resized-20210923-142018-7" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20210404-172829-1-1" data-target="resized-resized-20210404-172829-1-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20210404-172829-1-1" style="background-image: url('/photos/tint/Resized_Resized_20210404_172829(1)(1)-65ba1d.jpg')" title="Resized_Resized_20210404_172829(1)(1)">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20210404_172829(1)(1)-ccf4df.jpg" src="/photos/tint/Resized_Resized_20210404_172829(1)(1)-65ba1d.jpg" height="1024" width="768" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20210404_172829(1)(1)-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20210404-172829-1-1" data-target="resized-resized-20210404-172829-1-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20210618-184829-1" data-target="resized-resized-20210618-184829-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20201207-122226" data-target="resized-resized-20201207-122226" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20201207-122226" style="background-image: url('/photos/tint/Resized_Resized_20201207_122226-65ba1d.jpg')" title="Resized_Resized_20201207_122226">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20201207_122226-ccf4df.jpg" src="/photos/tint/Resized_Resized_20201207_122226-65ba1d.jpg" height="576" width="1024" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20201207_122226-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20201207-122226" data-target="resized-resized-20201207-122226">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20210404-172829-1-1" data-target="resized-resized-20210404-172829-1-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-resized-20201017-093641" data-target="resized-resized-20201017-093641" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-resized-20201017-093641" style="background-image: url('/photos/tint/Resized_Resized_20201017_093641-65ba1d.jpg')" title="Resized_Resized_20201017_093641">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_Resized_20201017_093641-ccf4df.jpg" src="/photos/tint/Resized_Resized_20201017_093641-65ba1d.jpg" height="1024" width="576" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_Resized_20201017_093641-686656.jpg')"></span>
  </span>
  <a class="open" href="/resized-resized-20201017-093641" data-target="resized-resized-20201017-093641">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20201207-122226" data-target="resized-resized-20201207-122226" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/resized-2" data-target="resized-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="resized-2" style="background-image: url('/photos/tint/Resized_2-65ba1d.jpeg')" title="Resized_2">
  <img class="lazyload" data-src="/photos/thumbnail/Resized_2-ccf4df.jpeg" src="/photos/tint/Resized_2-65ba1d.jpeg" height="576" width="1024" />
  <span class="full">
    <span style="background-image: url('/photos/large/Resized_2-686656.jpeg')"></span>
  </span>
  <a class="open" href="/resized-2" data-target="resized-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-resized-20201017-093641" data-target="resized-resized-20201017-093641" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6787" data-target="img-6787" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6787" style="background-image: url('/photos/tint/IMG_6787-65ba1d.jpg')" title="IMG_6787">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6787-ccf4df.jpg" src="/photos/tint/IMG_6787-65ba1d.jpg" height="1280" width="960" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6787-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6787" data-target="img-6787">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/resized-2" data-target="resized-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6683-2" data-target="img-6683-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6683-2" style="background-image: url('/photos/tint/IMG_6683%202-65ba1d.jpg')" title="IMG_6683 2">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6683%202-ccf4df.jpg" src="/photos/tint/IMG_6683%202-65ba1d.jpg" height="1536" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6683%202-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6683-2" data-target="img-6683-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6787" data-target="img-6787" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6567" data-target="img-6567" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6567" style="background-image: url('/photos/tint/IMG_6567-65ba1d.jpg')" title="IMG_6567">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6567-ccf4df.jpg" src="/photos/tint/IMG_6567-65ba1d.jpg" height="480" width="360" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6567-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6567" data-target="img-6567">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6683-2" data-target="img-6683-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6404" data-target="img-6404" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6404" style="background-image: url('/photos/tint/IMG_6404-65ba1d.jpg')" title="IMG_6404">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6404-ccf4df.jpg" src="/photos/tint/IMG_6404-65ba1d.jpg" height="480" width="360" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6404-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6404" data-target="img-6404">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6567" data-target="img-6567" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6399-1" data-target="img-6399-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6399-1" style="background-image: url('/photos/tint/IMG_6399-1-65ba1d.jpg')" title="IMG_6399-1">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6399-1-ccf4df.jpg" src="/photos/tint/IMG_6399-1-65ba1d.jpg" height="600" width="800" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6399-1-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6399-1" data-target="img-6399-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6404" data-target="img-6404" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6394-1" data-target="img-6394-1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6394-1" style="background-image: url('/photos/tint/IMG_6394-1-65ba1d.jpg')" title="IMG_6394-1">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6394-1-ccf4df.jpg" src="/photos/tint/IMG_6394-1-65ba1d.jpg" height="1200" width="1600" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6394-1-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6394-1" data-target="img-6394-1">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6399-1" data-target="img-6399-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-6391" data-target="img-6391" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-6391" style="background-image: url('/photos/tint/IMG_6391-65ba1d.jpg')" title="IMG_6391">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_6391-ccf4df.jpg" src="/photos/tint/IMG_6391-65ba1d.jpg" height="1280" width="960" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_6391-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-6391" data-target="img-6391">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6394-1" data-target="img-6394-1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-2359" data-target="img-2359" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-2359" style="background-image: url('/photos/tint/IMG_2359-65ba1d.jpg')" title="IMG_2359">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_2359-ccf4df.jpg" src="/photos/tint/IMG_2359-65ba1d.jpg" height="1024" width="768" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_2359-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-2359" data-target="img-2359">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-6391" data-target="img-6391" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20220202-142743-01" data-target="img-20220202-142743-01" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-20220202-142743-01" style="background-image: url('/photos/tint/IMG_20220202_142743_01-65ba1d.jpg')" title="IMG_20220202_142743_01">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20220202_142743_01-ccf4df.jpg" src="/photos/tint/IMG_20220202_142743_01-65ba1d.jpg" height="2592" width="1944" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20220202_142743_01-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20220202-142743-01" data-target="img-20220202-142743-01">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-2359" data-target="img-2359" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/img-20220201-135741747" data-target="img-20220201-135741747" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="img-20220201-135741747" style="background-image: url('/photos/tint/IMG_20220201_135741747-65ba1d.jpg')" title="IMG_20220201_135741747">
  <img class="lazyload" data-src="/photos/thumbnail/IMG_20220201_135741747-ccf4df.jpg" src="/photos/tint/IMG_20220201_135741747-65ba1d.jpg" height="2592" width="1944" />
  <span class="full">
    <span style="background-image: url('/photos/large/IMG_20220201_135741747-686656.jpg')"></span>
  </span>
  <a class="open" href="/img-20220201-135741747" data-target="img-20220201-135741747">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20220202-142743-01" data-target="img-20220202-142743-01" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/edward-collins-headshot" data-target="edward-collins-headshot" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="edward-collins-headshot" style="background-image: url('/photos/tint/Edward-Collins-Headshot-65ba1d.jpg')" title="Edward-Collins-Headshot">
  <img class="lazyload" data-src="/photos/thumbnail/Edward-Collins-Headshot-ccf4df.jpg" src="/photos/tint/Edward-Collins-Headshot-65ba1d.jpg" height="825" width="632" />
  <span class="full">
    <span style="background-image: url('/photos/large/Edward-Collins-Headshot-686656.jpg')"></span>
  </span>
  <a class="open" href="/edward-collins-headshot" data-target="edward-collins-headshot">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/img-20220201-135741747" data-target="img-20220201-135741747" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);