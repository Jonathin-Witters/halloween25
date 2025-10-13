import Image from "next/image";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<header className="flex flex-col items-center justify-center text-center">
				<h1 className="text-2xl font-bold">De Buurt</h1>
				<h2 className="text-sm">Welkom in de buurt, waar waarheid thuiskomt</h2>
				<hr />
			</header>
			<main className="flex flex-col gap-6">
				<h2 className="text-lg font-semibold mb-4">Recente Updates</h2>
				<div className="bg-foreground text-background w-[80vw]  lg:w-[60vw] rounded-lg">
					<h3 className="text-md font-semibold p-4 border-b border-background/20">
						De waarheid komt altijd boven water
					</h3>
					<p className="p-4">
						Mensen noemen mij een roddelaar. Maar als ik niets zeg, wie dan wel?
						<br />
						Deze stad verdient de waarheid, en ik ben hier om die te brengen, of die nu in het licht
						wil komen of niet.
						<br />
						De burgemeester verbergt dingen...
						<br />
						<br />
						#wakervandestad #waarheid #rechtvaardigheid
					</p>
				</div>
				<div className="bg-foreground text-background w-[80vw]  lg:w-[60vw] rounded-lg">
					<h3 className="text-md font-semibold p-4 border-b border-background/20">Oplichter!</h3>
					<p className="p-4">
						Jarenlang heb ik de burgemeester vertrouwd. Maar nu weet ik het zeker: hij is een
						oplichter.
						<br />
						Hij predikt maar altijd het beste voor zijn volk te willen, maar is het niet opvallend
						hoe hij de laatste tijd enkel nog maar om het weeshuis lijkt te geven?
						<br />
						Ik zie hem de laatste tijd maar meer op enkele plekken rondhangen: de ballocatie, het
						weeshuis en de straat van het gemeentehuis en de dokter..
						<br />
						Hij praat niet meer met de professor, de medium of zelfs zijn eigen buur! De gewone mens
						kan al helemaal niets meer van hem verwachten...
						<br />
						<br />
						#oplichter #waarheid #komopvoorhetvolk
					</p>
				</div>
				<div className="bg-foreground text-background w-[80vw]  lg:w-[60vw] rounded-lg">
					<h3 className="text-md font-semibold p-4 border-b border-background/20">
						Genoeg gelachen
					</h3>
					<p className="p-4">
						Ik heb het helemaal gehad met die burgemeester. Hij is al lang geen man van het volk
						meer.
						<br />
						Ik ga hem confronteren, recht in zijn gezicht. Genoeg gelachen. Straks wanneer hij weer
						gezellig met de gastvrouw zijn feestje gaat voorbereiden.
						<br />
						Ik wil antwoorden.
						<br />
						<br />
						#confrontatie #waarheid #genoeggelachen
					</p>
				</div>
				<div className="bg-foreground text-background w-[80vw]  lg:w-[60vw] rounded-lg">
					<h3 className="text-md font-semibold p-4 border-b border-background/20">
						Verstoppertje?
					</h3>
					<p className="p-4">
						Ik zag de burgemeester binnenlopen bij de gastvrouw, maar hij is nog niet buitengekomen.
						<br />
						Heeft hij mij gezien en ontwijkt hij me nu?
						<br />
						Ik zag net wel een beweging in het steegje. Misschien probeert hij wel hier onderuit te
						komen.
						<br />
						Ik heb er genoeg van. Ik neem de achteringang wel.
					</p>
				</div>
			</main>
			<footer className="text-sm text-center">
				&copy; {new Date().getFullYear()} De Buurt. Alle rechten voorbehouden.
				<br />
				De Buurt wordt beheerd door 'De Buur'.
			</footer>
		</div>
	);
}
