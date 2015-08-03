<h3>Latest News!</h3>
<p><b>SUPPORT FOR NEW DEFENSIVE TOWERS AND THRONE EFFECTS</b></p>
<p>At the moment I've just added support for the new Throne Room Effects for Defensive Towers, and also displaying the wall and tower level in the Fortifications Section of the Dashboard</p>
<p><b>BROKEN DOVES - UPDATE!</b></p>
<p>Kabam appear to have fixed the "broken dove" issue I reported a few months ago, however the warning will remain in the script for the time being..... Just in case! ;)</p>

<p><b>AUTO-REPLENISH DEFENDING TROOP LOSSES</b></p>
<p>Please use this option with care - it's a great way to lose all your troops....</p>
<p>On the dashboard - troops section there's now a tickbox labelled Auto-Replenish. If ticked, after each attack, your defenders will be reset to the levels they were before the attack. This is to enable you to (hopefully) successfully defend multiple waves. There may be timing issues with the attack landing, so I cannot guarantee this will work 100% of the time, but it's a feature that's been asked for many times, so why not give it a shot ;)</p>

<p><b>ALTERNATE SORT ORDER</b></p>
<p>The throne room effects in the monitor window can now be seen in an alternate order if required - Range, Attack, Defence, Life, Speed, Accuracy and Load. Other effects are shown at the end. Within each category, the order is General Buff, Troop-Specific Buff, General Debuff, Troop-Specific Debuff.</p>

<p><b>OUTGOING MARCHES - PLEASE READ!</b></p>
<p>When developing this, it became clear that the outgoing march queue is woefully inadequate. Therefore as part of this development I have attempted to "fix it up". Since this is quite a risky strategy, I have not enabled the outgoing march functionality by default. If you want to enable the outgoing march stuff, then tick the checkbox in the options.</p>
<p>The development comes in two parts - The first an Outgoing Marches window equivalent to the Incoming Marches one, which contains details of all your outgoing marches (excluding raids, they were just too cumbersome!), with options to filter by march type, whether they are marches to yourself, and whether you want to see returning marches.</p>
<p>The second is an outgoing attack section in the dashboard, which ONLY shows your attacks or scouts going out from the selected city, and not returning troops.</p>
<p>On both displays, marches or encampments can be recalled by clicking on the march icon.</p>
<p>When a march is first launched, very little information appears in the march queue. The script then attempts to fetch details of the march back from the server to fill in the missing blanks, so you may notice a delay before things like target name, type, and champion information appears in the march display.</p>

<h3>Description</h3>
<p>The idea behind this script is to provide easy-access to Kingdoms of Camelot battle functions and information during the heat of battle. Natively in the game you have to click numerous buttons and tabs to get all the information you need... incoming marches, arrival times, enemy throne rooms, sacrifices, reinforcements, defences, etc. This script's aim is to simplify this process enabling quick strategic decisions on how best to attack or defend.</p>

<p>Thanks to Nico De Belder, Mary Matson, Phil Cazz and all the other scripters who have given me advice and support. Also much credit obviously goes to the original developers of Power Bot (Don DaVinci) and Power Tools (George Jetson), whose expertise and ability really started this whole thing off.</p>

<h3>Screenshots!</h3>
<a href='http://postimg.org/image/ycc9yeajh/'><img src='http://s6.postimg.org/ycc9yeajh/BCMain.jpg' alt='BCMain' border='0' /></a>
<a href='http://postimg.org/image/ot2l4xn19/'><img src='http://s6.postimg.org/ot2l4xn19/BCMonitor.jpg' alt='BCMonitor' border='0' /></a>
<a href='http://postimg.org/image/jvtlxkafx/'><img src='http://s6.postimg.org/jvtlxkafx/BCCity_Defence.jpg' alt='BCCity Defence' border='0' /></a>  <br>
<a href='http://postimg.org/image/4cw60g259/'><img src='http://s6.postimg.org/4cw60g259/BCIncoming.jpg' alt='BCIncoming' border='0' /></a>
<a href='http://postimg.org/image/3yuu0ui1p/'><img src='http://s6.postimg.org/3yuu0ui1p/BCMonitor_Log.jpg' alt='BCMonitor Log' border='0' /></a>

<h3>Major Rewrite!</h3>
<p>The monitoring functions have been completely rewritten to make them faster, more efficient and less CPU-intensive. This is how I would have written it if I'd known 6 months ago what I know now...</p>

<h3>Monitor History Log</h3>
<p>Keep a record of all the unique throne rooms you have ever monitored! (Well, up to a maximum of 50, oldest ones eventually drop off the bottom...)</p>
<p>Label them, post them to chat, view them again, etc.</p>
<p>The "Keep" tickbox stops them from dropping off the bottom.</p>
<p>For a quick-view, mouse over the throne icon on the left...</p>

<h3>Sleep Mode</h3>
<p>Worried about Battle Console using up memory/CPU when you are afk? Well worry no more - just put it in Sleep Mode and it will do nothing at all until you come back and wake it up :)</p>


<h3>Battle Dashboard</h3>
<p>Now you can see everything you need to see on a single screen! The City Defence Window contains an overview of your city's defensive capabilities and current status.</p>
<b>Main Features:-</b><ul>
<li>Toggle City Defence Mode On/Off</li>
<li>Quickly select Marshall Champion, Throne Room and Guardian</li>
<li>Attack and Defence boosts</li>
<li>Change Guardian and Throne Room Preset</li>
<li>Sacrifice Troops!</li>
<li>View Troops in City - Split by Defenders and Sanctuary, and categorised by troop type (infantry, ranged, horsed and siege)</li>
<li>Quickly change defending troops</li>
<li>Add extra defenders and defensive presets</li>
<li>View Reinforcements - both encamped and incoming</li>
<li>View Wall Fortifications</li>
<li>View City Outgoing Attacks</li>
<li>View City Incoming Attacks</li>
</ul>

<p>The "Overview" section has options to change Marshall, Guardian, Champion and Throne Room.</p>

<p>The Throne Room selector tells you immediately when the throne room change request has been accepted by the server. This will help you decide how late you can safely leave throne room changes before an attack hits, based on your connectivity and the responsiveness of your session!</p>
<p>Throne Room presets can now be named, and can optionally be selected by name.</p>

<p>Everything else is really just eye-candy, but it's kind of nice eye candy ;)</p>

<h3>Monitor Operation</h3>
<p>It's pretty self-explanatory. Type in the player's name or UID in the box and click on the appropriate button, or click on one of the handy links either from the TR or the map, and that's it.. It refreshes every few seconds, and pings you if something changes.</p>

<h3>Legend for Colours</h3>
<span>Blue = Defence</span><br>
<span>Red = Attack</span><br>
<span>Green = Range</span><br>
<span>Cyan = Life</span><br>
<span>Orange = Accuracy</span><br>
<span>Black = Combat Speed</span><br>
<span>Magenta = Other pvp combat effects</span><br>
<span>Grey = others (non-combat)</span><br>
<br>
<b>Bold = General (affects all troops)</b><br>
<i>Italics = Debuff</i><br>
<p>In addition, Throne Room can also be changed from the monitor window for reacting quickly to the other person's changes!</p>

<h3>Incoming Marches Display</h3>
<p>This shows you everything that is currently coming at you - Attacks, scouts, reinforcements, transports... You can filter it of course!</p>

<h3>Outgoing Marches Display</h3>
<p>This shows you everything that is currently going away from you - Except Raids!! Attacks, scouts, reinforcements, transports... You can filter it of course! To recall any march, including reinforcements, click on the icon.</p>

<h3>Override Attack Notification</h3>
<p>Changes the "You are being Attacked!" at the top of the game screen, into a countdown timer for the soonest attack.</p>

<h3>Version History</h3>
<b>20150130a</b><ul><li>Fix monitor button in throne room</li></ul>
<b>20150120a</b><ul><li>Fix occasional bug reading champion data</li></ul>
<b>20141215a</b><ul><li>Support for Defensive Towers</li></ul>
<b>20141028a</b><ul><li>Minor display issue with quick sacrifice on dashboard</li></ul>
<b>20140925a</b><ul><li>Support for new Spellcaster Throne Effects</li></ul>
<b>20140917a</b><ul><li>Monitor player link to Kocmon</li></ul>
<b>20140822a</b><ul><li>Support for Spellcasters as new troop type on dashboard</li></ul>
<b>20140729a</b><ul><li>Include health boost banners on Dashboard</li></ul>
<b>20140724a</b><ul><li>Partial Rollback to fix instability</li></ul>
<b>20140722a</b><ul><li>Portal buttons on dashboard</li></ul>
<b>20140611a</b><ul><li>Fixed broken upgrade link</li></ul>
<b>20140522a</b><ul><li>Performance improvements</li><li>Option to change monitor refresh rate</li></ul>
<b>20140513a</b><ul><li>Choice of update URLs (Usersripts, Googlecode or Greasyfork)</li><li>Alternate sort order in Monitor (Range,Attack,Defence,Life,Speed,Accuracy,Load)</li><li>Link to profile from monitor window</li></ul>
<b>20140502a</b><ul><li>IMPORTANT! Fix for Jewel Stats!</li><li>Performance improvements</li><li>All monitor links now use UID internally (not user name)</li></ul>
<b>20140417a</b><ul><li>Show Battle Spells on incoming marches</li><li>Options to show resources in march windows</li></ul>
<b>20140410a</b><ul><li>Quick-Sacrifice Troop Buttons</li><li>Option to Reduce Size of Monitor Window</li></ul>
<b>20140409a</b><ul><li>Buttons for Mist and Dove on Dashboard</li><li>Broken Dove Detection</li><li>Support for pridwen415 (pvp domain)</li><li>Make defending troops bold in sacrifice dropdown</li></ul>
<b>20140331a</b><ul><li>Daylight Savings Time Fix</li><li>Chrome/Tampermonkey Support</li></ul>
<b>20140326a</b><ul><li>TR log tooltips bugfix</li><li>Last Login bugfix</li></ul>
<b>20140325a</b><ul><li>Performance improvements</li><li>Outgoing marches bugfix</li></ul>
<b>20140314a</b><ul><li>Outgoing Marches Window</li><li>Outgoing Attacks in Dashboard</li><li>Ability to Name TR Presets</li><li>Option to Select TR Presets by Name</li><li>Boost Attack/Defence from Dashboard</li><li>Allow for 6 or more TR Card Rows</li><li>UID Number on Monitor Window</li><li>Customise Dashboard Display Sequence</li></ul>
<b>20140219a</b><ul><li>Choice of Upper or Lower Defend Button</li><li>Incoming march time bugfix</li><li>Minor cosmetic changes to Options</li></ul>
<b>20140214a</b><ul><li>Defensive Presets</li><li>New troop type - Heavy Onagers</li><li>Refresh troop numbers in city just after attack lands</li><li>bugfix for sacrifice defending troop clawback</li><li>Option to completely hide Fortifications and Reinforcements from dashboard</li></ul>
<b>20140131b</b><ul><li>Additional selective defence options</li><li>Refresh troop numbers in city when refresh button clicked</li><li>Guardian change bugfix</li></ul>
<b>20140127a</b><ul><li>Sacrifice Halberdiers</li><li>Claw back defending troops for sacrifice if necessary</li><li>Display defending troops in Battle Dashboard</li><li>Quick Defending/Sanctuary toggle for each troop type</li></ul>
<b>20131219a</b><ul><li>Maximum Troops to Sacrifice Option</li><li>Remove Obsolete Functionality</li></ul>
<b>20131213a</b><ul><li>Change name of dashboard panel</li><li>Volume control</li></ul>
<b>20131202a</b><ul><li>Fix for arrived attacks not clearing the incoming queue</li><li>Option to remove transparency from windows</li></ul>
<b>20131129a</b><ul><li>Minor fix for flickering of champion tooltips windows</li></ul>
<b>20131126a</b><ul><li>Fix for simultaneous sacrifices when only one altar</li><li>Statue relocation</li><li>Champion compare option on incoming marches</li></ul>
<b>20131122a</b><ul><li>Champion info on incoming attacks</li></ul>
<b>20131121a</b><ul><li>Fix incoming attack display on main screen</li><li>Change city champion</li><li>Options button to reset window positions</li></ul>
<b>20131119a</b><ul><li>Overview Re-work</li><li>Display Champion Information</li><li>Temp fix for incoming attack display (disabled)</li><li>Option to change TR/guardian/marshall</li></ul>
<b>20131104b</b><ul><li>Dashboard Mode fix for kabam.com</li><li>Fix expiration times now DST has ended</li></ul>
<b>20131031a</b><ul><li>City Defence "dashboard" Mode</li><li>Send all reinforcements home button</li><li>Include load as a pvp effect</li><li>Scrolling history log and search filters</li></ul>
<b>20131018a</b><ul><li>Monitor Function Rewrite!</li><li>Added option to only show PVP effects</li><li>New "sleep mode" option</li><li>Monitor history log</li></ul>
<b>20130930a</b><ul><li>Fix for Dagonets Court Jester crashing monitor</li></ul>
<b>20130918b</b><ul><li>Fix for mist/truce duration for non-UK timezones.</li><li>Fix for repeated 'player is undefined' error in log.</li></ul>
<b>20130918a</b><ul><li>Fix for Grand SiegeMaster</li></ul>
<b>20130913a</b><ul><li>Fix for potential problem in update_seed_ajax</li></ul>
<b>20130911a</b><ul><li>Brand New City Defence Window!</li><li>Minor bugfix for non-ascii characters in name</li></ul>
<b>20130909a</b><ul><li>Update Seed bug fix (fixes tower alert problems with other bots)</li></ul>
<b>20130821a</b><ul><li>Allow monitor by UID number</li><li>Slight change to colours</li><li>Include colours in Post to Chat</li></ul>
<b>20130809a</b><ul><li>Check for updates fix</li><li>Rounded windows fix</li><li>Automatic march refresh option has been removed, due to conflicts with other scripts.</li><li>Rearrange throne room furniture!</li></ul>
<b>20130806a</b><ul><li>Heroes support</li></ul>
<b>20130726a</b><ul><li>Show different colours for each effect on monitor window</li><li>Incoming march timer on Throne Room screen</li><li>Incoming marches screen</li><li>Options layout change</li><li>Blue buttons</li><li>Check for updates</li></ul>
<b>20130701a</b><ul><li>Increased the monitoring timeout from 5 mins to 15 mins.<br>
</li></ul>
<b>20130630a</b><ul><li>Fix for the permanent "arrow" sound when timed out.<br>
</li></ul>
<b>20130630a</b><ul><li>Fix for the Incoming March Timer (didn't always show soonest arrival time).</li></ul>
<b>20130626a</b><ul><li>Check For Updates</li><li>Incoming Attack Countdown</li></ul>
<b>20130618a</b><ul><li>Server load reduction</li><li>Pause/Resume Buttons</li><li>Monitoring Timeout</li><li>Continue Monitoring after refresh</li><li>Fix for Candelabra statistics not being shown</li></ul>
<b>20130614a</b><ul><li>Initial Version</li></ul>

<h3>License</h3><p>

<center>

<br>
<a href='http://creativecommons.org/licenses/by-nc-nd/3.0/'><img src='http://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png' alt='Creative Commons License' /></a><br />This work is licensed under a <a href='http://creativecommons.org/licenses/by-nc-nd/3.0/'>Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.</a>

</center>

</p>