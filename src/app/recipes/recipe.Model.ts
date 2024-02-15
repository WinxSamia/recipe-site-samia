export class Recipe
{

public name:string;
public description:string;
public imagePath:string;

constructor( n: string, desc:string, imagePath:string){
this.name=n;
this.description=desc;
this.imagePath=imagePath;
}
}