<?php
namespace App\Controller\Utils\Form;


use App\Entity\Achat;
use App\Entity\Category;
use App\Form\AchatType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FormValidateur
{
    /**
     * @var FormFactoryInterface
     */
    private $formFactory;
    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(FormFactoryInterface $formFactory, EntityManagerInterface $entityManager)
    {
        $this->formFactory = $formFactory;
        $this->em = $entityManager;
    }

    public function post(Request $request)
    {
        $form = $this->formFactory->create(AchatType::class, new Achat());

        $form->handleRequest($request);

        dump($form->isSubmitted());die;
    }


    public function delete(int $id)
    {
        $achat = $this->em
            ->getRepository(Achat::class)
            ->findOneBy(['id' => $id]);

        if(!$achat) {
            throw new NotFoundHttpException("Ressource non disponible");
        }

        $this->em->remove($achat);
        $this->em->flush();
    }
}
