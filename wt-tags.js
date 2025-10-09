/* ---------- База описаний тегов ---------- */
const WT_DESCRIPTIONS = {
  assault: `
    <b>ASSAULT</b><br>
    <p>Assault weapons fire so indiscriminately that they can be shot from the hip as warriors dash forward.</p>
	Weapons with <span>[ASSAULT]</span> in their profile are known as Assault weapons. If a unit that
	<span class="tooltip00004" data-tooltip-content="#tooltip_content00004"><span class="tt kwbu">Advanced</span>
	</span> this turn contains any models equipped with Assault weapons, it is still eligible to shoot in this turn’s 
	<a href="https://wahapedia.ru/wh40k10ed/the-rules/core-rules/#SHOOTING-PHASE">Shooting phase</a>. When such a unit
	is selected to shoot, you can only resolve attacks using Assault weapons its models are equipped with.<br/><br/>
	<div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>Can be shot even if the bearer’s unit Advanced.</li></ul></div><div><br/></div>
  `,
  rapid_fire: `
    <h3 style="display:flex;">Rapid Fire</h3><p class="ShowFluff legend2">Rapid fire weapons are capable of long-ranged precision shots or controlled bursts at nearby targets.</p>Weapons with <span class="kwb2 bluefont">[RAPID FIRE X]</span> in their profile are known as Rapid Fire weapons. Each time such a weapon targets a unit within half that weapon’s range, the Attacks characteristic of that weapon is increased by the amount denoted by ‘x’.<br/><br/><div class="redExample"><b>Example:</b> A model targets a unit that is within half range of a weapon with an Attacks characteristic of 1 and the <span class="kwb2 bluefont">[RAPID FIRE 1]</span> ability. That weapon therefore makes two attacks at the target, and you make two <span class="tooltip00013" data-tooltip-content="#tooltip_content00013"><span class="tt kwbu">Hit</span> <span class="tt kwbu">rolls</span></span>.</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li><span class="kwb2 bluefont">[RAPID FIRE X]</span>: Increase the Attacks by ‘x’ when targeting units within half range.</li></ul></div><div><br/></div>
  `,
  ignores_cover: `
    <h3 style="display:flex;">Ignores Cover</h3><p class="ShowFluff legend2">Some weapons are designed to root enemy formations out of entrenched positions.</p>Weapons with <span class="kwb2 bluefont">[IGNORES COVER]</span> in their profile are known as Ignores Cover weapons. Each time an attack is made with such a weapon, the target cannot have the <span class="tooltip00037" data-tooltip-content="#tooltip_content00037"><span class="tt kwbu">Benefit</span> <span class="tt kwbu">of</span> <span class="tt kwbu">Cover</span></span> against that attack.<div><br/></div>
	`,
  torrent: `
    <h3 style="display:flex;">Torrent</h3><p class="ShowFluff legend2">Torrent weapons shoot clouds of fire, gas or other lethal substances that few foes can hope to evade.</p>Weapons with <span class="kwb2 bluefont">[TORRENT]</span> in their profile are known as Torrent weapons. Each time an attack is made with such a weapon, that attack automatically hits the target.<div><br/></div>
	`,
  pistol: `
    <b>PISTOL</b><br>
    in their profile are known as [PISTOL]. If a unit contains any models equipped with Pistols, that unit is eligible to shoot in its controlling player’s 
	<a href="https://wahapedia.ru/wh40k10ed/the-rules/core-rules/#SHOOTING-PHASE">Shooting phase</a>
	even while it is within <a href="https://wahapedia.ru/wh40k10ed/the-rules/core-rules/#Engagement-Range">Engagement Range</a> 
	of one or more enemy units. When such a unit is selected to shoot, it can only resolve attacks using its Pistols and can only target one of the enemy units
	it is within Engagement Range of. In such circumstances, a Pistol can target an enemy unit even if other friendly units are within Engagement Range of the same 
	enemy unit.<br/><br/>If a model is equipped with one or more Pistols, unless it is a <span class="kwb">MONSTER</span> or <span class="kwb">VEHICLE</span> model,
	it can either shoot with its Pistols or with all of its other ranged weapons. Declare whether such a model will shoot with its Pistols or its other ranged weapons
	before selecting targets.<br/><br/><ul class="redSquare"><li>Can be shot even if the bearer’s unit is within
	Engagement Range of enemy units, but must target one of those enemy units.</li><li>Cannot be shot alongside any other non-Pistol weapon (except by a <span class="kwb">MONSTER</span>
	or <span class="kwb">VEHICLE</span>).</li></ul>
  `,
  indirect_fire: `
    <h3 style="display:flex;">Indirect Fire</h3><p class="ShowFluff legend2">Indirect fire weapons launch munitions over or around intervening obstacles – nowhere is safe from their fury.</p>Weapons with <span class="kwb2 bluefont">[INDIRECT FIRE]</span> in their profile are known as Indirect Fire weapons, and attacks can be made with them even if the target is not visible to the attacking model. These attacks can destroy enemy models in a target unit even though none may have been visible to the attacking unit when you selected that target.<br/><br/>If no models in a target unit are visible to the attacking unit when you select that target, then each time a model in the attacking unit makes an attack against that target using an Indirect Fire weapon, subtract 1 from that attack’s <span class="tooltip00013" data-tooltip-content="#tooltip_content00013"><span class="tt kwbu">Hit</span> <span class="tt kwbu">roll</span></span>, an unmodified Hit roll of 1-3 always fails, and the target has the <span class="tooltip00037" data-tooltip-content="#tooltip_content00037"><span class="tt kwbu">Benefit</span> <span class="tt kwbu">of</span> <span class="tt kwbu">Cover</span></span> against that attack. Weapons with the <span class="kwb2 bluefont">[TORRENT]</span> ability cannot be fired using the <span class="kwb2 bluefont">[INDIRECT FIRE]</span> ability.<br/><br/><div class="redExample"><b>Example:</b> An enemy unit is targeted by an attacking model equipped with a weapon with the <span class="kwb2 bluefont">[INDIRECT FIRE]</span> ability. No models in the target unit are visible to the attacking model, so when resolving the attacks made with that weapon, subtract 1 from that attack’s Hit roll an unmodified Hit roll of 1-3 always fails, and each time an attack is allocated to a model in the target unit, it has the Benefit of Cover against that attack.</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>Can target and make attacks against units that are not visible to the attacking unit.</li><li>If no models are visible in a target unit when it is selected, then when making an attack against that target with an Indirect Fire weapon, subtract 1 from that attack’s Hit roll, an unmodified Hit roll of 1-3 always fails, and the target has the Benefit of Cover against that attack.</li></ul></div>
	`,
  precision: `
    <h3 style="display:flex;">Precision</h3><p class="ShowFluff legend2">Precision attacks can pick high-value targets out in a crowd, whether through the unerring aim of a sniper or the pinpoint accuracy of a blade-master’s strike.</p>Weapons with <span class="kwb2 bluefont">[PRECISION]</span> in their profile are known as Precision weapons. Each time an attack made with such a weapon successfully wounds an Attached unit (see <span class="tooltip00018" data-tooltip-content="#tooltip_content00018"><span class="tt kwbu">Leader</span></span> ability), if a <span class="kwb">CHARACTER</span> model in that unit is visible to the attacking model, the attacking model’s player can choose to have that attack allocated to that <span class="kwb">CHARACTER</span> model instead of following the normal <a href="https://wahapedia.ru/wh40k10ed/the-rules/core-rules/#Making-Attacks">attack sequence</a>.<br/><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>When targeting an Attached unit, the attacking model’s player can have the attack allocated to a <span class="kwb">CHARACTER</span> model in that unit visible to the bearer.</li></ul></div>
	`,
  heavy: `
    <h3 style="display:flex;">Heavy</h3><p class="ShowFluff legend2">Heavy weapons are amongst the biggest guns on the battlefield, but require bracing to fire at full effect and are unwieldy to bring to bear at close quarters.</p>Weapons with <span class="kwb2 bluefont">[HEAVY]</span> in their profile are known as Heavy weapons. Each time an attack is made with such a weapon, if the attacking model’s unit <span class="tooltip00020" data-tooltip-content="#tooltip_content00020"><span class="tt kwbu">Remained</span> <span class="tt kwbu">Stationary</span></span> this turn, add 1 to that attack’s <span class="tooltip00013" data-tooltip-content="#tooltip_content00013"><span class="tt kwbu">Hit</span> <span class="tt kwbu">roll</span></span>.<br/><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>Add 1 to Hit rolls if the bearer’s unit Remained Stationary this turn.</li></ul></div></div>
	`,
  anti: `
    <h3 style="display:flex;">Anti</h3><p class="ShowFluff legend2">Certain weapons are the bane of a particular foe.</p>Weapons with <span class="kwb2 bluefont">[ANTI-KEYWORD X+]</span> in their profile are known as Anti weapons. Each time an attack is made with such a weapon against a target with the keyword after the word ‘Anti-’, an unmodified <span class="tooltip00031" data-tooltip-content="#tooltip_content00031"><span class="tt kwbu">Wound</span> <span class="tt kwbu">roll</span></span> of ‘x+’ scores a <span class="tooltip00031" data-tooltip-content="#tooltip_content00031"><span class="tt kwbu">Critical</span> <span class="tt kwbu">Wound</span></span>.<br/><br/><div class="redExample"><b>Example:</b> An attack made with an <span class="kwb2 bluefont">[ANTI-VEHICLE 4+]</span> weapon will score a Critical Wound against – and so successfully wound – a <span class="kwb">VEHICLE</span> unit on an unmodified Wound roll of 4+, while an attack made with an <span class="kwb2 bluefont">[ANTI-PSYKER 2+]</span> weapon will score a Critical Wound against – and so successfully wound – a <span class="kwb">PSYKER</span> unit on an unmodified Wound roll of 2+.</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li><span class="kwb2 bluefont">[ANTI-KEYWORD X+]</span>: An unmodified Wound roll of ‘x+’ against a target with the matching keyword scores a Critical Wound.</li></ul></div></div>
	`,
  one_shot: `
    <b>ONE SHOT</b><br>
    This weapon can only be used once per battle.
  `,
  /* ---------- Special тегов ---------- */
  melta: `
    <h3 style="display:flex;">Melta</h3><p class="ShowFluff legend2">Melta weapons are powerful heat rays whose fury is magnified at close range.</p>Weapons with <span class="kwb2 bluefont">[MELTA X]</span> in their profile are known as Melta weapons. Each time an attack made with such a weapon targets a unit within half that weapon’s range, that attack’s Damage characteristic is increased by the amount denoted by ‘x’.<br/><br/><div class="redExample"><b>Example:</b> A model targets a unit that is within half range of a weapon with a Damage characteristic of D6 and the <span class="kwb2 bluefont">[MELTA 2]</span> ability. If that attack inflicts damage on the target, it inflicts D6+2 damage.</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li><span class="kwb2 bluefont">[MELTA X]</span>: Increase the Damage by ‘x’ when targeting units within half range.</li></ul></div><div><br/></div>
	`,
  blast: `
    BLAST<br><p class="ShowFluff legend2">High-explosives can fell several warriors in a single blast, but firing them where your comrades will get caught in the ensuing detonation is simply unwise.</p>Weapons with <span class="kwb2 bluefont">[BLAST]</span> in their profile are known as Blast weapons, and they make a random number of attacks. Each time you determine how many attacks are made with a Blast weapon, add 1 to the result for every five models that were in the target unit when you selected it as the target (rounding down). Blast weapons can never be used to make attacks against a unit that is within Engagement Range of one or more units from the attacking model’s army (including its own unit).<br/><br/><div class="redExample"><b>Example:</b> If a weapon with the <span class="kwb2 bluefont">[BLAST]</span> ability and an Attacks characteristic of 2D6 targets a unit that contains 11 models, and the roll to determine how many attacks are made is a 9, a total of 11 attacks would be made against that unit.</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>Add 1 to the Attacks characteristic for every five models in the target unit (rounding down).</li><li>Can never be used against a target that is within Engagement Range of any units from the attacking model’s army (including its own).</li></ul></div>
	`,
  lance: `
    <h3 style="display:flex;">Lance</h3><p class="ShowFluff legend2">Lance weapons are deadly on the charge.</p>Weapons with <span class="kwb2 bluefont">[LANCE]</span> in their profile are known as Lance weapons. Each time an attack is made with such a weapon, if the bearer made a <span class="tooltip00011" data-tooltip-content="#tooltip_content00011"><span class="tt kwbu">Charge</span> <span class="tt kwbu">move</span></span> this turn, add 1 to that attack’s <span class="tooltip00031" data-tooltip-content="#tooltip_content00031"><span class="tt kwbu">Wound</span> <span class="tt kwbu">roll</span></span>.</div>
	`,
  lethal_hits: `
    <h3 style="display:flex;">Lethal Hits</h3><p class="ShowFluff legend2">Some weapons can inflict fatal injuries on any foe, no matter their resilience.</p>Weapons with <span class="kwb2 bluefont">[LETHAL HITS]</span> in their profile are known as Lethal Hits weapons. Each time an attack is made with such a weapon, a <span class="tooltip00013" data-tooltip-content="#tooltip_content00013"><span class="tt kwbu">Critical</span> <span class="tt kwbu">Hit</span></span> automatically wounds the target.<div><br/></div>
	`,
  twin_linked: `
    <h3 style="display:flex;">Twin-linked</h3><p class="ShowFluff legend2">Dual weapons are often grafted to the same targeting system for greater lethality.</p>Weapons with <span class="kwb2 bluefont">[TWIN-LINKED]</span> in their profile are known as Twin-linked weapons. Each time an attack is made with such a weapon, you can re-roll that attack’s <span class="tooltip00031" data-tooltip-content="#tooltip_content00031"><span class="tt kwbu">Wound</span> <span class="tt kwbu">roll</span></span>.<div class="mIndent"><br/></div></div>
	`,
  devastating_wounds: `
    <h3 style="display:flex;">Devastating Wounds</h3>Weapons with <span class="kwb2 bluefont">[DEVASTATING WOUNDS]</span> in their profile are known as Devastating Wounds weapons. Each time an attack is made with such a weapon, if that attack scores a <span class="tooltip00031" data-tooltip-content="#tooltip_content00031"><span class="tt kwbu">Critical</span> <span class="tt kwbu">Wound</span></span>, no <span class="tooltip00033" data-tooltip-content="#tooltip_content00033"><span class="tt kwbu">saving</span> <span class="tt kwbu">throw</span></span> of any kind can be made against that attack (including <span class="tooltip00035" data-tooltip-content="#tooltip_content00035"><span class="tt kwbu">invulnerable</span> <span class="tt kwbu">saving</span> <span class="tt kwbu">throws</span></span>). Such attacks are only allocated to models after all other attacks made by the attacking unit have been allocated and resolved. After that attack is allocated and after any modifiers are applied, it inflicts a number of <span class="tooltip00026" data-tooltip-content="#tooltip_content00026"><span class="tt kwbu">mortal</span> <span class="tt kwbu">wounds</span></span> on the target equal to the Damage characteristic of that attack, instead of inflicting damage normally.<br/><br/><div class="redExample"><b>Example:</b> An attack made with a Devastating Wounds weapon with a Damage characteristic of 2 scores a Critical Wound. Instead of allocating the attack and making saving throws normally, the target suffers 2 mortal wounds.</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>A Critical Wound inflicts mortal wounds equal to the weapon’s Damage characteristic, instead of any normal damage.</li></ul></div><div class="mIndent"><br/></div></div>
	`,
  sustained_hits: `
    <h3 style="display:flex;">Sustained Hits</h3><p class="ShowFluff legend2">Some weapons strike in a flurry of blows, tearing the foe apart with relentless ferocity.</p>Weapons with <span class="kwb2 bluefont">[SUSTAINED HITS X]</span> in their profile are known as Sustained Hits weapons. Each time an attack is made with such a weapon, if a <span class="tooltip00013" data-tooltip-content="#tooltip_content00013"><span class="tt kwbu">Critical</span> <span class="tt kwbu">Hit</span></span> is rolled, that attack scores a number of additional hits on the target as denoted by ‘x’.<br/><br/><div class="redExample"><b>Example:</b> A model makes an attack with a melee weapon with the <span class="kwb2 bluefont">[SUSTAINED HITS 2]</span> ability. If the <span class="tooltip00013" data-tooltip-content="#tooltip_content00013"><span class="tt kwbu">Hit</span> <span class="tt kwbu">roll</span></span> is an unmodified 6 (a Critical Hit), then that attack scores a total of 3 hits on the target (1 from the successful Hit roll of 6, and 2 from the <span class="kwb2 bluefont">[SUSTAINED HITS 2]</span> ability).</div><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li><span class="kwb2 bluefont">[SUSTAINED HITS X]</span>: Each Critical Hit scores ‘x’ additional hits on the target.</li></ul></div>
	`,
  extra_attacks: `
    <h3 style="display:flex;">Extra Attacks</h3><p class="ShowFluff legend2">Some warriors ride to battle atop trusty mounts that gore and trample nearby foes. Others wield combat weapons that deliver a frenzy of additional blows.</p>Weapons with <span class="kwb2 bluefont">[EXTRA ATTACKS]</span> in their profile are known as Extra Attacks weapons. Each time the bearer of one or more  Extra Attacks weapons fights, it makes attacks with each of the Extra Attacks melee weapons it is equipped with and it makes attacks with one of the melee weapons it is equipped with that does not have the <span class="kwb2 bluefont">[EXTRA ATTACKS]</span> ability (if any). The  number of attacks made with an Extra Attacks weapon cannot  be modified by other rules, unless that weapon’s name is explicitly specified in that rule.<br/><br/><div class="BreakInsideAvoid frameLight Corner14" style=""><ul class="redSquare"><li>The bearer can attack with this weapon in addition to any other weapons it can make attacks with.</li></ul></div>
	`,
  hazardous: `
    <h3 style="display:flex;">Hazardous</h3><p class="ShowFluff legend2">Weapons powered by unstable and dangerous energy sources pose a substantial risk to the wielder every time they are used.</p>Weapons with <span class="kwb2 bluefont">[HAZARDOUS]</span> in their profile are known as Hazardous weapons. Each time a unit is selected to shoot or fight, after that unit has resolved all of its attacks, for each Hazardous weapon that targets were selected for when resolving those attacks, that unit must take one Hazardous test. To do so, roll one D6: on a 1, that test is failed. For each failed test you must resolve the following sequence (resolve each failed test one at a time): <br/><ul><li>If possible, select one model in that unit that has lost one or more wounds and is equipped with one or more Hazardous weapons. </li><li>Otherwise, if possible, select one model in that unit (excluding <span class="kwb">CHARACTER</span> models) equipped with one or more Hazardous weapons. </li><li>Otherwise, select one <span class="kwb">CHARACTER</span> model in that unit equipped with one or more Hazardous weapons.</li></ul>If a model was selected, that unit suffers 3 <span class="tooltip00026" data-tooltip-content="#tooltip_content00026"><span class="tt kwbu">mortal</span> <span class="tt kwbu">wounds</span></span> and when allocating those mortal wounds, they must be allocated to the selected model.<br/>If a unit from a player’s army is selected as the target of the <span class="tooltip00014" data-tooltip-content="#tooltip_content00014"><span class="tt kwbu">Fire</span> <span class="tt kwbu">Overwatch</span></span> Stratagem in their opponent’s <a href="/wh40k10ed/the-rules/core-rules/#CHARGE-PHASE">Charge phase</a>, any mortal wounds inflicted by Hazardous tests are allocated after the charging unit has ended its Charge move.<br/><br/><div class="redExample"><b>Example:</b> A unit of five models make five attacks with ranged weapons with the <span class="kwb2 bluefont">[HAZARDOUS]</span> ability
	`,
	/* ---------- our тегов ---------- */
	three_shot: `
    <b>THREE SHOT</b><br>
    This weapon can only be used 3 times per battle.
  `,
};

/* ---------- Определение кастомного элемента ---------- */
class WTTag extends HTMLElement {
  connectedCallback() {
    const nameRaw = (this.getAttribute('name') || '').trim().toLowerCase();
    const desc = WT_DESCRIPTIONS[nameRaw];

    const label = nameRaw + this.innerText +'s'
      ? nameRaw.replace(/[_-]/g, ' ').toUpperCase()
      : 'UNKNOWN';
	  
	if (nameRaw == 'hazardous' || nameRaw == 'twin_linked' || nameRaw == 'lethal_hits' || nameRaw == 'lance' || nameRaw == 'blast' || nameRaw == 'melta' || nameRaw == 'devastating_wounds' || nameRaw == 'sustained_hits' || nameRaw == 'extra_attacks') { /* ---------- Special тегов ---------- */
	this.innerHTML = `<span class="wt-tag" style="background:#909;">
        ${label + ' ' + this.innerText}
        <span class="wt-tooltip" style="border:1px solid #717;">
          ${desc || '<i>No description available</i>'}
        </span>
      </span>`;
	} else { /* ---------- our тегов ---------- */
	
		if (nameRaw == 'three_shot') { /* ---------- Special тегов ---------- */
		this.innerHTML = `<span class="wt-tag" style="background:#039;">
			${label + ' ' + this.innerText}
			<span class="wt-tooltip" style="border:1px solid #039;">
			${desc || '<i>No description available</i>'}
			</span>
		</span>`;
		} else { /* ---------- defolt тегов ---------- */
	
	
		this.innerHTML = `<span class="wt-tag">
			${label + ' ' + this.innerText}
			<span data-sound="sounds/eldar.mp3" class="wt-tooltip">
			${desc || '<i>No description available</i>'}
			</span>
		</span>`;

		}

	}
	  
  }
}


/* ---------- Регистрация кастомного элемента ---------- */
customElements.define('wt-tag', WTTag);