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
        $achat = new Achat();
        $form = $this->formFactory->create(AchatType::class, $achat);

        $data = json_decode($request->getContent(), true);

        $category = $this->saveCategory($data);

        $form->submit($data);
        if($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $data->setCategory($category);

            $this->em->persist($data);
            $this->em->flush();
            return $data;
        }

        return $form->getErrors();
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

    private function saveCategory($data)
    {
        if(isset($data['category'])) {
            $category = $this->em->getRepository(Category::class)->findOneBy(['label'=> $data['category']['label']]);
            if(!$category) {
                $category = new Category();
                $category->setLabel($data['category']['label']);
                $this->em->persist($category);
            }
            return $category;
        }
        return null;
    }
}